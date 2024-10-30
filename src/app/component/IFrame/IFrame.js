import { htmlDataAtom, logicCheckAtom } from "@/store";
import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";

const IFrame = ({ setEditorContent, changedContent, setSection, editView, setMonograColor, editorContent, setIsLoaded, isLoaded, changedDivElements, changeState, setChangeState }) => {
  const link = localStorage.getItem("url")
  const [htmlData, setHtmlData] = useAtom(htmlDataAtom);
  const [editElement, setEditElement] = useState();
  const serializer = new XMLSerializer();
  const [logicCheck, setLogicCheck] = useAtom(logicCheckAtom)

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`https://osprey-heroic-eagle.ngrok-free.app/iframehtml`, {
        params: { link },
        headers: {
          "Content-Type": "multipart/form-data",
          "ngrok-skip-browser-warning": "true"
        },
        responseType: "text"
      })
      const data = res.data
      console.log(data, "--------data")
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      console.log(doc, "---------doc")

      // Select all <div> elements
      const divElements = doc.querySelectorAll('div');

      // Check each <div> for the substring "dis" and apply style if found
      // divElements.forEach(div => {
      //   if (div.textContent.includes("enere")) {
      //     div.style.color = 'red';
      //   }
      // });

      Array.from(divElements).forEach((divElement) => {
        if (divElement.id !== 'preview-content' && divElement.id !== 'preview') {
          let logic_flag = false;

          // Check for logic flags
          logicCheck?.tags?.forEach((tag, index) => {
            if (divElement.textContent.includes(tag)) {
              logic_flag = index + 1;
            }
          });

          // Apply styles and titles based on the checks
          if (logic_flag) {
            divElement.style.color = 'red';
            divElement.title = logicCheck?.reasons[logic_flag - 1];
          } else {
            divElement.style.color = 'none';
            divElement.title = '';
          }
          console.log(divElement, "divelement------------->")
        }
      });

      // Convert the DOM Document back to a string
      const serializer = new XMLSerializer();
      const styledHtmlString = serializer.serializeToString(doc);

      setHtmlData(styledHtmlString);
      setIsLoaded(true);
    }
    fetch()
  }, [])

  const handleClick = (event) => {
    event.preventDefault();
    var clickedElement = event.target;
    // if target is tr or td, select table tag for editing
    if (clickedElement.tagName === 'TD' || clickedElement.tagName === 'TH') {
      clickedElement = clickedElement.parentElement.parentElement.parentElement;
    }
    if (clickedElement.tagName === "IMG" || clickedElement.tagName === "FIGURE") {
      clickedElement = clickedElement.closest("div")
    }
    const tagNames = ['HTML', 'P', 'SPAN', 'FIGURE', 'IMG', 'UL', 'SVG', 'SUP', 'BODY', 'SECTION'];
    const ids = ['preview-content', 'preview', 'container-ruller'];
    if (tagNames.includes(clickedElement.tagName) || ids.includes(clickedElement.id) || clickedElement.tagName.includes('MJX')) {
      // Do nothing for these elements
    } else {
      setEditorContent(clickedElement);
      setEditElement(clickedElement);

      const iframe = document.getElementById("documentWindow");
      if (isLoaded) {
        const elements = iframe.querySelectorAll('h2, h3, h4, div, table, li, a, blockquote, section, mjx-container, math, mrow, msub, mi, mo, msqrt, mfrac, mn, svg, sup, strong');

        elements.forEach(element => {
          element.style.background = 'none';
        });
      }
      // Set the background color of the newly clicked element
      // clickedElement.style.background = "#dcfce7";
    }
  };

  const handleMouseOver = (event) => {
    var hoveredElement = event.target;
    if (hoveredElement.tagName === 'TD' || hoveredElement.tagName === 'TH') {
      // hoveredElement = hoveredElement.parentElement.parentElement.parentElement;
      hoveredElement = hoveredElement.closest('table');
    }
    const tagNames = ['HTML', 'P', 'SPAN', 'FIGURE', 'IMG', 'UL', 'SVG', 'SUP', 'BODY', "SECTION"];
    const ids = ['preview-content', 'preview', 'container-ruller'];
    // if (tagNames.includes(hoveredElement.tagName) || ids.includes(hoveredElement.id) || hoveredElement.tagName.includes('MJX')) {
    // } else {
    //   hoveredElement.style.cursor = "pointer";
    //   if (!hoveredElement.style) return;
    //   if (hoveredElement.style.background !== 'rgb(220, 252, 231)') {
    //     hoveredElement.style.background = "#bae6fd";
    //   }
    // }
    if (!tagNames.includes(hoveredElement.tagName) && !ids.includes(hoveredElement.id) && !hoveredElement.tagName.includes('MJX')) {
      hoveredElement.style.cursor = "pointer";
      if (hoveredElement.style.background !== 'rgb(220, 252, 231)') {
        hoveredElement.style.background = "#bae6fd";
      }
    }
  };

  const handleMouseOut = (event) => {
    var leftElement = event.target;
    if (leftElement.tagName === 'TD' || leftElement.tagName === 'TH') {
      // leftElement = leftElement.parentElement.parentElement.parentElement;
      leftElement = leftElement.closest('table');
    }
    const tagNames = ['HTML', 'P', 'SPAN', 'FIGURE', 'IMG', 'UL', 'SVG', 'SUP', 'BODY', "SECTION"];
    const ids = ['preview-content', 'preview', 'container-ruller'];
    if (tagNames.includes(leftElement.tagName) || ids.includes(leftElement.id) || leftElement.tagName.includes('MJX')) {
    } else {
      if (!leftElement.style) return;
      // Only reset the background if the element is not the previously clicked element
      if (leftElement.style.background == 'rgb(186, 230, 253)') {
        leftElement.style.background = "none";
      }
      leftElement.style.cursor = "auto";
    }
  };

  // // remove background and editorContent from clicked element when user left editor
  useEffect(() => {
    setEditElement(null);
    setEditorContent(null);
    const iframe = document.getElementById("documentWindow");
    if (iframe) {
      const elements = iframe.querySelectorAll('h2, h3, h4, div, table, li, a, blockquote, body');
      elements.forEach(element => {
        element.style.background = 'none';
      });

      if (iframe) {
        setMonograColor(true)
      } else setMonograColor(false);
    }
  }, [isLoaded])


  useEffect(() => {
    const iframe = document.getElementById("documentWindow");
    if (isLoaded) {
      iframe.addEventListener("click", handleClick);
      iframe.addEventListener("mouseover", handleMouseOver);
      iframe.addEventListener("mouseout", handleMouseOut);
    }
    if (isLoaded) {
      if (iframe) {
        iframe.addEventListener('load', () => {
          addIframeEventListeners();
          injectMathJax();
        });
        if (editView && iframe && iframe.innerHTMLt) {
          addIframeEventListeners();
        };
      };
    }
    else {
      if (iframe && iframe.innerHTML) {
        iframe.removeEventListener("click", handleClick);
        iframe.removeEventListener("mouseover", handleMouseOver);
        iframe.removeEventListener("mouseout", handleMouseOut);
      }
    };
    // return () => {
    //   if (iframe && iframe.innerHTML) {
    //     iframe.removeEventListener("click", handleClick);
    //     iframe.removeEventListener("mouseover", handleMouseOver);
    //     iframe.removeEventListener("mouseout", handleMouseOut);
    //   }
    // };
  }, [isLoaded]);


  useEffect(() => {
    const fetch = async () => {
      console.log("editElement", editElement, typeof editElement);
      if (!editElement) return;
      // console.log("editElement => " + editElement);
      // console.log("changedContent => " + changedContent, typeof (changedContent));
      let emptyEditElement = editElement.innerHTML;

      let tmp = htmlData;
      // console.log(typeof tmp)
      // console.log(tmp.includes(emptyEditElement), "---------");
      if (changeState === true) {
        // console.log(changedContent, "------changedcontent")
        // if (oristring === emptyEditElement) console.log("True")
        console.log(emptyEditElement, "-------emptyelement")
        emptyEditElement = emptyEditElement.replaceAll("<br>", "<br />");
        // console.log(replacedVal);
        console.log(emptyEditElement, "-----empty")
        console.log(tmp.includes(emptyEditElement), "---------true");
        setHtmlData(tmp.replace(emptyEditElement, changedContent));
        setChangeState(false)

      }
    }
    fetch()
  }, [changedContent])

  return (
    <>
      <div
        id="documentWindow"
        className="text-[16px] w-full overflow-y-scroll overflow-x-hidden h-[70vh]"
        dangerouslySetInnerHTML={{ __html: htmlData }}
      />
      {/* {changedDivElements} */}
    </>
  );
};

export default IFrame;
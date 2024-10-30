import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from "axios";


// Using dynamic import of Jodit component as it can't render server-side
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })
// import 'jodit/build/jodit.min.css';
// import "https://cdnjs.cloudflare.com/ajax/libs/jodit/3.6.5/jodit.min.css"

const Editor = ({ editorContent, setEditorContent, changedContent, setChangedContent, section, setSection, setChangeState }) => {
  const editor = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);
  const [model, setModel] = useState('');
  const [config, setConfig] = useState(null); ``

  const [improvedText, setImprovedText] = useState("");

  // const isBrowser = typeof window !== 'undefined';

  const options = [
    'customParagraph', '|',
    'bold',
    'underline',
    'italic', '|',
    'link', '|',
    'undo', 'redo', '|',
    'eraser', '|',
    'insertTooltip'
  ];

  useEffect(() => {
    setIsBrowser(true);
    import('jodit-react').then((module) => {

      //add tooltip icon
      module.Jodit.modules.Icon.set('tooltip', '<img src="https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Info-512.png">')
      module.Jodit.modules.Icon.set('greenCheck', '<img src="https://img.icons8.com/?size=100&id=Zy5ghkQj2rKy&format=png&color=000000" />')
      module.Jodit.modules.Icon.set('math', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVDiNxY+xSgNBFEXPG7KEBW38Ab8gzU61naQSQbAR/Atb7QRRSeMfWKYxFkoKG60UtnDzEG1stbOxNCQL+6wWliU7BiycaoZ77+EM/PeRtsB73wPGwHpLZQocuwD8MDAGiIGDhQZpmsbz+fwTWA0AAIYd7/0OsA+MJ5PJOcBsNtsUkWpcAH0zmzbG36r61gEugDVgI0mSJ1V9EJHdqiUi93meP7YpOOCjVj5K0zQGtmudUegPzszOau9+URSnwEqlH0XRdQgggPPePwO9Zmhmt6q6FTQASjM7acmD+hUAVR0BL42s6Ha7N0sBFlmY2V2WZV/LAlDVK+C1ll3+Ngbo1O5lWZZ7zrmBiLwDw2UAfz4/dNtaTXH2UcAAAAAASUVORK5CYII=" />')
      module.Jodit.modules.Icon.set('chemistry', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGPSURBVDiN1ZKxa1NRFMZ/5yY1COYPKFiEiNpBHe55SQiZdFBEHAQHQZwchapLodClCEKhi4Pg6KaSzamCQnDJEMiTDqIoGXTRRcHFR+K7x8G8cHkNdfabDt8558flu0c4QM1mc8XMboUQPo5Go6dAKM/IosVOp3N4MpmsAZvAkZn9NoRwJ03TNwcCkiS5ZmY7wLEFbDOz55VK5d5wOPwKUC06rVbrZJ7nj83sXGnpM7AMLAEiItdDCKeBMwCumMrz/AUQL/80s/Usy04AZ0VkN+qtFLvVyDwV1U+ccxvFM4H3wCVVvQxcdc49YxboPANVtaJuNBrVXq+XL8hgn9y/R/5LwHg8vquqS2VfVY+r6lqSJPPAY8C3qN4B9rz3FwG63W7de78NvAMemtkrZh8wB4QQbgBfIsiqiOyq6sssyz6IyDpwaNar7AOkafoaWAXuA78i0AX+XmKhPTO7QvkOYrXb7aPT6fSBiNyM7B/AVr1ef9Tv938X5kJAIe/9eefc7RDCp1qttj0YDL6XZ/4A/MWDnkkEniQAAAAASUVORK5CYII=">')
      module.Jodit.modules.Icon.set('rightarrow', '<img src="https://cdn-icons-png.flaticon.com/256/724/724954.png" />')
      module.Jodit.modules.Icon.set('arrowup', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAADg4OClpaWSkpIPDw/Y2NjHx8caGhorKyswMDCVlZXc3Nzv7++3t7cdHR3m5ubS0tJ8fHyFhYWrq6txcXEkJCS+vr4+Pj45OTlMTExSUlJaWlpHR0cICAj19fVlZWWaRJuaAAADY0lEQVR4nO3c6XqiUAwG4OhUUCr7oq21ev9XOVJtB+EsyVk7z5P8DvD6gQgSBeDi+o21L/pTWZ6aYh9b8lN5O6weNbR5bM290tVTHWJ7xupWs3qNLQL4MzetVi+/0BRdJTRFVklMUY8rqSliVgpTtKyUpkhZaUxRVFpTBBXCFFyFMgVWIU1BVWhTQBXBFExFMgVSEU1BVGRTAJWBybvKyORZZWjyqjI2ebySsTB5y8rK5CkrS5OXrKxNHrJyYHKelROTY5Ujk1OVM5NDlUOTM5VTkyOVY5MTlXOTg/OVB5N1Vl5Mlll5Mlll5c1kkZVHk3FWXk2GKs8mI5V3k4EqgImsCmIiqgKZSKpgJoIqoAmtCmpCqgKbUKrgJoQqgkmrimLSqCKZlFcy0UyKrCKapFlFNUmyimwSqqKbBCqqaeOsSa6imobFMImoukHfI1dRTWVSYdqqpDRXUU3bFNaYvjWkW1MValdMqkwAiwJyVo/zVf1JW+yWEx5Fz2pcO1yIC22/RtzQKNhTVeOsWks0fb0SAoqcVUt+Idv7higoWNM2Ue7hQDOlQEdRszpAT2kvvzdDQ8Ga9B7s4UzoHr5zoqIgpZzbj0D4fBomo6VEFOwJqg0BNcmJjqJktYEj2vQ0gktGEbI6og/0XQ12KKh3yE1docA1DgnYoiBBZlUgT57Zc05mKKgzzFLj51iD6NstRrqNULDH7MHm1pjr27JkvnZDFCSIrKqxUXtU7ZYmUxQk2qy6e6PmwlOQkzlKm9XPpeeLqkuUkwVKk1Xzr/FV3pUJ12yBgrUiq3baKM1KuO/sUIo92Dw3SrKS5GSHkmbVzhuFWYmPJ2uU5Lhqlo2CrLJKtlZLFFSCrIRfuyyykudkjRJktdh395qdRY+q3+XYoiCfXTN1ssZ0Gqr6t0LWKMin93ZZqugsrm/j/XL53ipX6AJ1W0f7Pt5QfL5dC3UjVHWapon2F1UuULe0ktvGavnbiVhuUI6LUYxiFKMYxShGMYpRjGIUoxjFKEYxilGMYtT/gMJNmgVGoQacLoFRgHjumoU2qR9c3iv8v83U2nmUzXxsIEBpRwcET8q810UzJXMMfpiPVZ1UplPo88GjcsXwTh/v//LSD+GM6OeH6kmZ/6q7/lxuJlWe+y7C246LS1l/AcaKNidexH1dAAAAAElFTkSuQmCC" />')
      module.Jodit.modules.Icon.set('arrowdown', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAYFBMVEX///8AAAD5+flmZmbIyMisrKyPj4+Tk5Obm5uoqKigoKCJiYmWlpa6urrDw8OMjIy0tLTS0tLz8/NPT0/s7Ozj4+NxcXFJSUl6enpAQEAICAiCgoJgYGA0NDQPDw8vLy9s7q0LAAADpklEQVR4nO2c22KqMBBFidVai9WC1ku1nv//y2NKsUBuM5PL9GH2cyCrK2RCBVJV8dk3zXyYptknOGt8Pg5HNc3x8MGNVbUnA6vLqWUGOzjAlDrwoj05we5onGBvHjCl3vjA2rOX7Mw3nptPL9nnho3sxQum1JqNrA6QXbjAZr6ZqfM0EzIhEzIhEzIhEzIhEzIhEzIhEzIhEzIhEzIhEzIhEzIhEzIhE7LMZLP9HnjCZGSzFtDl5nLd7a6XeUGyedel/5Hj5qs/6ReALQlZ83h6+8/Dthqc9bYqQra4Ddo7u5w8rlwWIFuOD6hBrZR6yU5mPFS22tiaZw5YiyZbm4dYrBnGwmixZNYun6etnu3n9j6jjyRzvB+wBYEZ7RKSWY0ZXVqusT4ea1FknjcqBmgeMOdMjiRzDtKoS28rj7UIssA7KD/TwDJ3x3Fda3Qy5zXW59vGPNTKWXLJZK/hLu/LdrsLN3NYo5IFjd2za6sG0MxhjUgGMKa0tAuonXWG0sgC863PqfK/3PYbizUSGcyYUufqFm7UxbRGIQMau98fwslMawQyqDFNZr6m68zUGp4MbEypo39lmmQZSRZ6+3CYLbBqPJrHkEHq2CMNrNLa0ZBkKLDr/VCUtNEtJ44suDyP0uDmi05NJEMZ6/+/w6FtSWQ4Ywva31MTyHA9vNKm82/xgJPhjI3+VccdWiPJyMbwaEsUGW5EJmDYw2sEGWJJUtZfXXDK12Ay3Mw3jFXoU9RAMpyxhQ0Ma20JIou8xqjWgmTIP9ZhDH+xbt2fFHU54Ga89/e6Vfj4bHn3gWGtpUzoF85qwQQG+DiKx1rQGNe1FrjG+uCmeoo46xi3NaAxHVwdig3YmA5uNYiLp/LbglvvYhJ+vsVkDWmsnDUCWBk09FB2yT+gJGMlrBGN6eQtuYgCW9ZahDGdfDdF0d+E51reUUtSSWtJvqLPYS2BMZ301pLtO5D6piiRMZ20dS2qjk2Tsq5F1rFp0llLakwn1fJOXsTdSWMtuTGdFNYyGNOJt5bFWAq0bGCxA5ppKLvELFSZt8KhW8tqTIdqrcDmQbSFKvGSZM87AazQzkF4a0WM6WCtFdygCmetmDEdzAwtvKUXvK5lr2PTQK0xbIIGW96LG9OBWGPaNi5sLeNtTxwaG1hoQBl3APRbYzSm416oWI3puKwxG9OxW+PbMHEQ20LFUmDNmHt0/gljOtOboj9iTGdkjXFTTkvmjw/y1Bn0tWA4/wF3FDc+MwStlQAAAABJRU5ErkJggg=="/>')

      setConfig(
        {
          readonly: false,
          placeholder: 'Edit your content here!',
          defaultActionOnPaste: 'insert_as_html',
          defaultLineHeight: 1.5,
          enter: 'p',
          buttons: options,
          buttonsMD: options,
          buttonsSM: options,
          buttonsXS: options,
          statusbar: false,
          sizeLG: 900,
          sizeMD: 700,
          sizeSM: 400,
          language: 'es',
          colors: ['#159957', '#7DC9A5', '#f2f2f2', '#fcf9e7', '#fff', '#000'],
          uploader: {
            insertImageAsBase64URI: true,
            imagesExtensions: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp']
          },
          allowTabNavigation: false,
          link: {
            noFollowCheckbox: false,
            openInNewTabCheckbox: false,
            modeClassName: '',
          },
          spellCheck: true,
          autofocus: true,
          popup: {
            img: null
          },
          enableDragAndDropFileToEditor: true,
          disablePlugins: ['paste', 'imageProperties'],
          // custom buttons
          extraButtons: [
            // add new div blank block bellow selected one

            'image',
            'table',
            // delete block button
            {
              name: 'deleteBlock',
              tooltip: 'Delete block',
              icon: 'bin',
              exec: () => {
                if (editorContent && editorContent.parentNode) {
                  editorContent.parentNode.removeChild(editorContent);
                }
              }
            },
            '|',
            ,
            // AI assistant
            // {
            //   name: 'aiAssistant',
            //   tooltip: 'AI Assistant',
            //   icon: 'ai_assistant',
            //   exec: (editor) => {
            //     if (editor.value) {
            //       const sectionCheck = async () => {
            //         setModel("Processing...")
            //         axios
            //           .post(`${process.env.NEXT_PUBLIC_WINDOWS_SERVER_URL}/sectionCheck`, null, {
            //             params: {
            //               content: String(editor.value),
            //               title: section
            //             },
            //           })
            //           .then(function (response) {
            //             setImprovedText(response["data"].improvedText);
            //           })
            //           .catch(function (error) {
            //             setImprovedText(String(error))
            //           });
            //       };
            //       sectionCheck();
            //     }
            //   }
            // },
            '|',
            {
              name: 'math equation',
              tooltip: 'Math Equation',
              icon: 'math',
              exec: (editor) => {
                document.getElementById('editorIcon')?.click();
              }
            },
            {
              name: 'chemistry equation',
              tooltip: 'Chemistry Equation',
              icon: 'chemistry',
              exec: (editor) => {
                document.getElementById('chemistryIcon')?.click();
              }
            },
            '|',
            // insert check button
            {
              name: 'insertCheck',
              tooltip: 'Apply Changes',
              icon: 'greenCheck',
              exec: (editor) => {
                setChangedContent(editor.value);
                setChangeState(true)
              }
            },
          ],
        }
      );


      // add custom button by Jodit method
      // create custom paragraph type button

      module.Jodit.defaultOptions.controls.customParagraph = {
        tooltip: 'Select the type of the block',
        icon: 'paragraph',
        list: ['Title 1', 'Title 2', 'Title 3', 'Body', 'Boxed text', 'Table/Figure Title', 'Table/Figure Note', 'Centered formula'],

        childTemplate: (editor, key, value) =>
          `<span class="${key}">${editor.i18n(value)}</span>`,

        exec(editor, _, { control }) {
          let value = control.args && control.args[0]; // h1, h2 ...
          // change div tag to h2 tag
          if (value == 'Title 1') {
            const tempElement = document.createElement('h2');
            tempElement.innerHTML = editorContent.innerHTML.toUpperCase();
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Title 2') {
            const tempElement = document.createElement('h3');
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Title 3') {
            const tempElement = document.createElement('h4');
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Body') {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Boxed text') {
            const tempElement = document.createElement('blockquote');
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Table/Figure Title') {
            const tempElement = document.createElement('div');
            tempElement.style.cssText = 'text-align: center;';
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Table/Figure Note') {
            const tempElement = document.createElement('div');
            tempElement.style.cssText = 'font-size: 0.9rem; text-align: justify;'
            tempElement.classList.add('footnote');
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }
          else if (value == 'Centered formula') {
            const tempElement = document.createElement('div');
            tempElement.style.cssText = 'text-align: center;';
            tempElement.innerHTML = editorContent.innerHTML;
            editorContent.parentNode.replaceChild(tempElement, editorContent);
            setEditorContent(tempElement);
          }

        }
      };
      // Create insert tooltip button
      module.Jodit.defaultOptions.controls.insertTooltip = {
        tooltip: 'Insert Note',
        icon: 'tooltip',
        popup: (editor, current, self, close) => {
          const selectedText = window.getSelection()?.toString();
          const form = editor.create.fromHTML(
            `<form  class="bg-white m-0">
                <input type="text" class="shadow appearance-none border rounded text-gray-700 focus:outline-none "/>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded focus:outline-none focus:shadow-outline">Insert</button>
            </form>`
          );
          editor.e.on(form, 'submit', (e) => {
            e.preventDefault();
            const tooltipText = form.querySelector('input').value;
            var tooltipHTML = selectedText + '<sup class="custom-tooltip" style="color: #00ccff" title="' + tooltipText + '">[auto]</span>';
            editor.s.insertHTML(tooltipHTML);
          });

          return form;
        }
      }
    })
  }, [editorContent]);

  useEffect(() => {
    const editElement = editor.current?.editor.editor;
    if (!editElement) return;

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = changedContent;
    editElement.innerHTML = '';

    while (tempContainer.firstChild) {
      const firstChild = tempContainer.firstChild;

      // Append all child nodes of firstChild to editElement
      while (firstChild.firstChild) {
        editElement.appendChild(firstChild.firstChild);
      }

      try {
        tempContainer.removeChild(firstChild);
      } catch (error) {
        console.error('Error removing child element:', error);
      }
    }

    setIsSaved(false);
  }, [changedContent]);

  useEffect(() => {
    if (editorContent) {
      let content = editorContent.outerHTML;
      if (content && typeof content === 'string') {
        let contentChange = content.replace("red", "none");
        setModel(contentChange);
      }
      setChangedContent(editorContent.outerHTML);
    } else {
      setModel('');
      setChangedContent('');
    }
    // try {
    //   const sectionTitleElement = editorContent.parentNode.getElementsByTagName('h2')[0];
    //   if (sectionTitleElement?.id !== 'title') {
    //     setSection(sectionTitleElement.textContent);
    //   }
    // } catch (e) {
    //   console.log('Please select the correct section');
    // }
  }, [editorContent]);

  useEffect(() => {
    setModel(improvedText);
  }, [improvedText])

  const handleModelChange = (newModel) => {
    setModel(newModel);
  };

  useEffect(() => {
    if (editor.current) {
      const editorField = Array.from(document.getElementsByClassName('jodit-wysiwyg'))[0];
      if (typeof window !== 'undefined' && window.WirisPlugin && editorField) {
        const genericIntegrationProperties = {
          target: editorField,
          toolbar: document.getElementById('mathtoolbar'),
        };
        const genericIntegrationInstance = new window.WirisPlugin.GenericIntegration(genericIntegrationProperties);
        genericIntegrationInstance.init();
        genericIntegrationInstance.listeners.fire('onTargetReady', {});
        window.WirisPlugin.currentInstance = genericIntegrationInstance;
      }
    }
  }, [editor.current]);

  return (
    <div className="w-full px-1">
      <div id="mathtoolbar" className='hidden'></div>
      <div className="flex justify-between">
        <span className="font-semibold text-[25px]">{section}</span>
      </div>
      <div className="w-full mt-1 h-[70%]">
        {isBrowser && (() => {
          try {
            return (
              <JoditEditor
                ref={editor}
                value={model}
                config={config}
                onChange={handleModelChange}
                tabIndex={1}
                className="w-full"
              />
            );
          } catch (error) {
            console.error('Error in JoditEditor', error);
            return <h1>Error</h1>;
          }
        })()}
      </div>
    </div>
  );
};

export default Editor;

"use client"
import Image from "next/image"
import Editor from "../component/jodit/Editor"
import IFrame from "../component/IFrame/IFrame"
import { useEffect, useState } from "react"
import "../Editor.css"
import { useAtom } from "jotai"
import { EditViewAtom, htmlDataAtom, logicCheckAtom } from "@/store"
import { type } from "os"
const EditPanel = () => {
    const [editorContent, setEditorContent] = useState("select the tag")
    // once the value of Editor is changed, it is set as editor's HTML string
    const [changedContent, setChangedContent] = useState("");
    // section title of the edited content. set from preview IFrame
    const [section, setSection] = useState("Section Title");

    const [editView, setEditView] = useAtom(EditViewAtom)
    const [monograColor, setMonograColor] = useState(false)
    const [logicCheck, setLogicCheck] = useAtom(logicCheckAtom)
    const [htmlData, setHtmlData] = useAtom(htmlDataAtom)
    const [isLoaded, setIsLoaded] = useState(false);
    // const iframeRef = useRef(null)
    const [changedDivElments, setChangedDivElements] = useState();
    const [changeState, setChangeState] = useState(false)


    return (
        <div className="flex flex-col xl:flex-row w-full px-[5px] md:px-[30px] xl:px-[60px] gap-5 items-center">
            <div className="w-[85%] xl:w-[60%] rounded-[16px] border-[1px] border-black border-solid h-[73vh] mt-[15px] mb-[5px]">
                <IFrame
                    editorContent={editorContent}
                    setEditorContent={setEditorContent}
                    changedContent={changedContent}
                    setSection={setSection}
                    editView={editView}
                    setMonograColor={setMonograColor}
                    setIsLoaded={setIsLoaded}
                    isLoaded={isLoaded}
                    // iframeRef={iframeRef}
                    className="w-full"
                    divElments={changedDivElments}
                    changeState={changeState}
                    setChangeState={setChangeState}
                />
            </div>
            <div className="w-[85%] xl:w-[40%] rounded-[16px] border-[1px] border-black border-solid h-[73vh] mt-[15px] mb-[10px]">
                <div className="mt-[20px]">
                    <Editor
                        editorContent={editorContent}
                        setEditorContent={setEditorContent}
                        setChangedContent={setChangedContent}
                        changedContent={changedContent}
                        section={section}
                        setSection={setSection}
                        setChangeState={setChangeState}
                    />
                </div>
            </div>
        </div>
    )
}
export default EditPanel
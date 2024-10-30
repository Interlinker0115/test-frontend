import Footer from "../component/footer/footer"
import EditorHeader from "../component/editorHeader/editorHeader"
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-svh w-full">
            <EditorHeader />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
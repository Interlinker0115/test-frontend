import Footer from "../component/footer/footer"
import Header from "../component/header/header"
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-svh w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
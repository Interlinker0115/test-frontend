import Footer from "../component/footer/footer"
import SubHeader from "../component/subheader/subheader"
import { currentUser } from "@clerk/nextjs/server";

const Layout = async ({ children }) => {
    const userInfo = await currentUser();
    const username = userInfo.username;
    return (
        <div className="flex flex-col justify-between h-svh">
            <SubHeader username={username} />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
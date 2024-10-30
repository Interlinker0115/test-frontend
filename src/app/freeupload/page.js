import Upload from "../component/upload/upload"
import Footer from "../component/footer/footer"
import SubHeader from "../component/subheader/subheader"
import { currentUser } from "@clerk/nextjs/server";



const FreeUpload = async () => {
    const userInfo = await currentUser();
    const username = userInfo.username;

    return (
        <div className="w-full h-svh flex flex-col justify-between">
            <SubHeader username={username} />
            <Upload username={username} />
            <Footer />
        </div>
    )
}
export default FreeUpload
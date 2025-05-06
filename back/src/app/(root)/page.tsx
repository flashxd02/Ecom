"use client";

import { Modal } from "@/components/ui/modal";
const SetupPage = () => {

    return(
        <div className="p-4">
         <Modal title="Store" description="select a store or created one." isOpen onClose={()=>{}} ></Modal>
        </div>
    )
}
export default SetupPage;
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastComponent(props: any) {

    const CloseButton = ({ closeToast }:any) => (<i className="material-icons" onClick={closeToast}> </i>);
    useEffect(()=>{
        const options = {
            position: props.position || "top-right",
            autoClose: props.autoClose || 3000,
            hideProgressBar: props.hideProgressBar || false,
            closeOnClick: props.closeOnClick || true,
            pauseOnHover: props.pauseOnHover || true,
            draggable: props.draggable || true,
            progress: props.progress || undefined,
            theme: props.theme||'default',
            onOpen: props.onOpen || null,
            onClose: props.onClose || null
        }
        const pendingConfigObj = {
            render(){
                const pending = (props.promisePending) ? props.promisePending : (()=>{return 'Loading'})
                return pending()
            },
            icon: true,
        }
        const successConfigObj = {
            render(){
                const success = (props.promiseSuccess) ? props.promiseSuccess : (()=>{return 'Success'})
                return success()
            },
            icon: "🟢",
        }
        const errorConfigObj = {
            render(){
                const error = (props.promiseError) ? props.promiseError : (()=>{return 'Error'})
                return error()
            },
            icon: "🔴"
        }
        
        switch (props.type) {
            case "success":
                toast.success(props.toastTitle, options); 
                break;
            case "info":
                toast.info(props.toastTitle, options); 
                break;
            case "warn":
                toast.warn(props.toastTitle, options); 
                break;
            case "error":
                toast.error(props.toastTitle, options)
                break;
            case "promise":
                const promise = (props.promise) ? props.promise : new Promise((resolve,reject) => setTimeout(() => resolve(true), 3000));
                toast.promise(
                    promise,
                    {
                      pending: pendingConfigObj,
                      success: successConfigObj,
                      error: errorConfigObj
                    }
                )
                break;
            default:
                toast(props.toastTitle, options );
                break;
        }
    }, [])

    return (
        <ToastContainer toastClassName={props.toastContainer} bodyClassName={props.toastBody} closeButton={CloseButton}/>
    );
}

export default ToastComponent;



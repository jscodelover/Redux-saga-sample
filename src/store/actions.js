export const REQ_HELLO = "REQ_HELLO";
export const RES_HELLO = "RES_HELLO";

export const req_hello = () => {
    return {
        type : REQ_HELLO
    }
}

export const res_hello = text => {
    return {
        type : RES_HELLO,
        text
    }
}
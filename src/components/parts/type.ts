
export type Button = {
    name:string,
    arg?:object,
    func:(e:React.MouseEvent,arg?:object)=>void,
    addClass?:string
}

export type TextBox<T> = {
    name:string,
    arg?:object,
    value:T,
    func:(e:React.ChangeEvent,arg?:object)=>void,
    addClass?:string
}

export type NumberBox = TextBox<number> & {
    min:number,
    max:number,
    step:number
}

export type CheckBox<T> = {
    checked:boolean,
    arg?:T,
    func:(e:React.ChangeEvent,arg?:T)=>void,
    name:string
}
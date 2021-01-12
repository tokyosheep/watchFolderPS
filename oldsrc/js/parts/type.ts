export type CheckBox<T> = {
    checked:boolean,
    arg?:T,
    func:(e:React.ChangeEvent,arg?:T)=>void,
    name:string
}
//домашнее задание 4, работа с объектом user
let user={
    name: "John"
}

export function age(){
    user.age=prompt("введите возраст");
    return user.age;
}

export function admin(){
    let ret = Object.assign({},user);
    ret.role='admin';
    return ret;
}

export function destructuringAssignment() {
    let adm=admin();
    let {name,age=0,role=''}=adm;
    console.log("name="+name+" age="+age+" role="+role);
}

class Shap {
    public l: any
    public b: any
    getArea(l: any, b: any): any {
        if ((typeof (l) === "number") && (typeof (b) === "number")) {
            return l * b
        }
        return l + " " + b

    }
}

const area = new Shap()

console.log(area.getArea(12,34))

console.log(area.getArea("sudipta","dinda"))
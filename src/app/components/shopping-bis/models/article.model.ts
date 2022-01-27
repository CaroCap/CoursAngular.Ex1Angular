export class Article {
    label: string
    quantite : number = 1

    constructor(labelName: string) {
        this.label = labelName
    }
    // pas besoin de quantity dans le constructor vu qu'on la définit par défaut à 1

}
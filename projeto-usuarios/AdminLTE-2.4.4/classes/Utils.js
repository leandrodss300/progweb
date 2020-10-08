class Utils{
    static dateFormat(d){
        // d => yyyy-mm-dd
        let data = new Date(d + " 00:00").toLocaleDateString("pt-BR")
        return data
    }
}
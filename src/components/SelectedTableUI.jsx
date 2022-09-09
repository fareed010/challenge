import data from "../data/data.json";


const SelectedTableUI = ({id}) => {
    if(id){
        data.filter(item => {
            if(item.id === id){
                return <p>{item.id}</p>
            }
        })
    }else {
        return <p>id is not passed via props</p>
    }
}

export default SelectedTableUI;
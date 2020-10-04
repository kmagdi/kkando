import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {DetailDualis} from "./DetailDualis"

class CollectDataDualis extends Component{
    constructor(props){
        super()
        this.state = {
            temaKorok:[],
            adatok:{},
            failed:false
        }
    }
    componentDidMount(){  
        const urlDualis="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/dualis.csv"
        fetch(urlDualis)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';')
                //console.log("adatok:"+Object.keys(adatokJSON[0]))
                //console.log("adatok2:"+adatokJSON[0].kod)
                //console.log("props:"+this.props.id)
                const filtered=adatokJSON.filter(obj=>obj.kod===this.props.id)
                //console.log("filtered="+filtered)
                if(filtered.length === 0){
                    this.setState({failed:true});
                }else{
                    this.setState({failed:false});
                    this.setState({temaKorok:adatokJSON[0]})
                    this.setState({adatok:filtered[0]})
                }
                //console.log("ok")
        }) 
    }
   
render(){
    return(
        <div>
            <DetailDualis temaKorok={this.state.temaKorok} adatok={this.state.adatok} failed={this.state.failed} />
        </div>
    )}   
}
export default CollectDataDualis           
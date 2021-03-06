import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {DetailInnovacio} from "./DetailInnovacio"

class CollectDataInnovacio extends Component{
    constructor(props){
        super()
        this.state = {
            temaKorok:[],
            adatok:{},
            failed:false
        }
    }
    componentDidMount(){  
        const urlInnovacio="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/innovacio.csv"
        fetch(urlInnovacio)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';')
                const filtered=adatokJSON.filter(obj=>obj.kod===this.props.id)
                if(filtered.length === 0){
                    this.setState({failed:true});
                }else{
                    this.setState({failed:false});
                    this.setState({temaKorok:adatokJSON[0]})
                    this.setState({adatok:filtered[0]})
                }
        }) 
    }
   
render(){
    return(
        <div>
            <DetailInnovacio temaKorok={this.state.temaKorok} adatok={this.state.adatok} failed={this.state.failed} />
        </div>
    )}   
}
export default CollectDataInnovacio          
import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {Detail} from "./Detail"



class CollectDataSpec extends Component{
    constructor(props){
        super()
        this.state = {
            temaKorok:[],
            adatok:{}
        }
    }
    componentDidMount(){  
        const urlJobs="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv"
        fetch(urlJobs)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';')
            //console.log("adatokJSON 0:"+adatokJSON[0].leiras)
            //console.log("adatokJSON 1:"+adatokJSON[1].leiras)
            //console.log("props="+this.props.id)
            const filtered=adatokJSON.filter(obj=>obj.kod==this.props.id) 
            /*for(const i in adatokJSON[0])
                    console.log(adatokJSON[0][i])*/
            this.setState({temaKorok:adatokJSON[0]})
            console.log("filtered type:"+typeof(filtered))
            console.log("obj keys:"+Object.keys(filtered[0]))
            this.setState({adatok:filtered[0]})
       
            })
       
    }
   
render(){
    console.log("kod="+this.state.adatok.kod)
     return(
        <div>
            <Detail temaKorok={this.state.temaKorok} adatok={this.state.adatok}/>
        </div>
    )}   
}
export default CollectDataSpec           
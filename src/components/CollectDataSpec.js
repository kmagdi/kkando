import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {Detail} from "./Detail"



class CollectDataSpec extends Component{
    constructor(props){
        super()
        this.state = {
            temaKorok:[],
            adatok:{},
            fotok:[],
            failed:false
        }
    }
    componentDidMount(){  
        const urlJobs="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv"
        fetch(urlJobs)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';')
                const filtered=adatokJSON.filter(obj=>obj.kod!==undefined&&obj.kod!=='0'&&obj.kod===this.props.id)
                if(filtered.length === 0){
                    this.setState({failed:true});
                }else{
                    this.setState({failed:false});
                    this.setState({temaKorok:adatokJSON[0]})
                    this.setState({adatok:filtered[0]})
                    let db=parseInt(this.state.adatok.fotok)
                    let urlImg=[]
                    while(db>0){
                    urlImg.push("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/"+this.props.id+"img"+(db-1)+".jpg")
                        db--;
                    }
                    this.setState({fotok:urlImg})
                }
            })
            
    }
   
render(){
    return(
        <div>
            <Detail temaKorok={this.state.temaKorok} adatok={this.state.adatok} fotok={this.state.fotok} failed={this.state.failed} />
        </div>
    )}   
}
export default CollectDataSpec           
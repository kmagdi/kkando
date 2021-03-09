import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {Detail} from "./Detail"



class CollectDataSpec extends Component{
    constructor(props){
        super()
        this.state = {
            temaKorok:[],
            adatok:{},
            failed:false,
            carouselIndex:0
        }
    }
    componentDidMount(){  
        const urlJobs="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv"
        fetch(urlJobs)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';');
                let filtered = [];
                adatokJSON.forEach((obj,index)=>{
                    if(obj.kod!==undefined&&obj.kod!=='0'&&obj.kod===this.props.id){
                        filtered.push([index,obj]);
                    }
                });
                if(filtered.length === 0){
                    this.setState({failed:true});
                }else{
                    this.setState({failed:false});
                    this.setState({temaKorok:adatokJSON[0]})
                    this.setState({adatok:filtered[0][1]})
                    this.setState({carouselIndex:(filtered[0][0]-1)})
                }
        }) 
    }
   
render(){
    return(
        <div>
            <Detail temaKorok={this.state.temaKorok} adatok={this.state.adatok} failed={this.state.failed} carouselIndex={this.state.carouselIndex} />
        </div>
    )}   
}
export default CollectDataSpec           
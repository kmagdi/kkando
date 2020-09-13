
export const Box=({ word })=> {
    const color = colors[Math.floor(Math.random() * 9)];
    const [visible, setVisible] = useState(true);
  
    function hideMe(){
      setVisible(false);
    }
    function showMe(){
        setVisible(true)
    }
  
    let style = { borderColor: color, backgroundColor: color };
    if (!visible) style.display = "none";
  
    return (
      <div className="box" {/*style={style}*/}>
        <div className="center">{word},fmdkgfdjkgkldfjgkldfgkldfklhjfklhfkljghklf</div>
        <button className="button top-corner" onClick={hideMe}><i className="fas fa-angle-right" /></button>
        <button className="button top-corner" onClick={showMe}><i className="fas fa-angle-left" /></button>
      </div>
    );
  }

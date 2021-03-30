import createClass from 'create-react-class';
import './Quicktabs.css';

const Tabs = createClass({
    getInitialState(){
      return {
        selected:this.props.selected || 0
      }
    },
    render(){
      return (<div className="tabs">
        <ul className="inline">
          {this.props.children.map((elem,index)=>{
            let style = index == this.state.selected ? 'selected': '';
           return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
        </div>
      )
    },
      handleChange(index){
        this.setState({selected:index})
      }
  })
  
  const Panel = createClass({
    render(){
      return <div>{this.props.children}</div>
    }
  })
  
  const Quicktabs = createClass({
    render(){
      return (
        <div id="quicktabs-container">
          <h1>Quick Tabs</h1>
          <div id="quicktabs">
            <Tabs selected={1} className="container">
              <Panel title="first">
                <h3>Content 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                  including versions of Lorem Ipsum.
                </p>
              </Panel>
              <Panel title="second">
              <h3>Content 2</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                  including versions of Lorem Ipsum.
                </p>
              </Panel>
              <Panel title="third">
              <h3>Content 3</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                  including versions of Lorem Ipsum.
                </p>
              </Panel>
            </Tabs>
          </div>
        </div>
      )
    }
  })

export default Quicktabs;
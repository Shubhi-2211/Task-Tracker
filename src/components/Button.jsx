const Button = ({color, title, onClick}) => {

  return (
    <button onClick = {onClick} className = "btn" style = {{
			backgroundColor: color
		}}>{title}</button>
  )
}

export default Button
interface ButtonProps{
    id?:string
    style?: React.StyleHTMLAttributes<HTMLButtonElement>,
    onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void,
    text?: string,
}

type ColorStyle = {
    name: string,
    backgroundColor: string,
    color: string
}

const Button = ({id, onClick, text, style}:ButtonProps) => {
    return <button style={style} onClick={onClick}>{text}</button>
}

const buttonWithStyles = (ElemParam:React.ComponentType<ButtonProps>, name = 'default') => {
    const colors = [
        {
          name: 'default',
          backgroundColor: '#e7e7e7',
          color: '#000000',
        },
        {
          name: 'react',
          backgroundColor: '#61dbfb',
          color: '#ffffff',
        },
        {
          name: 'success',
          backgroundColor: '#4CAF50',
          color: '#ffffff',
        },
        {
          name: 'info',
          backgroundColor: '#2196F3',
          color: '#ffffff',
        },
        {
          name: 'warning',
          backgroundColor: '#ff9800',
          color: '#ffffff',
        },
        {
          name: 'danger',
          backgroundColor: '#f44336',
          color: '#ffffff',
        },
      ]
      const { backgroundColor, color }:ColorStyle = colors.find((c) => c.name === name) || colors[0];

      const buttonStyles = {
        backgroundColor,
        padding: '10px 45px',
        border: 'none',
        borderRadius: 3,
        margin: 3,
        cursor: 'pointer',
        fontSize: '1.25rem',
        color,
      }

      return (props:ButtonProps) => <ElemParam {...props} style={buttonStyles}></ElemParam>;
}

const NewButton = buttonWithStyles(Button,'warning');

export {
    Button,
    buttonWithStyles,
    NewButton
}
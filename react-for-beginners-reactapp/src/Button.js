import PropTypes from 'prop-types'
import styles from './Button.module.css'
import title from './title.module.css'

function Button({ text }) {
  return (
    // 이렇게 할 필요 없이 위에 임포트 하면 된다.
    // <button style={{ backgroundColor: 'tomato', color: 'white' }}>
    //   {text}
    // </button>
    <div>
      <h1 className={title.title}>Welcome Back!</h1>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button

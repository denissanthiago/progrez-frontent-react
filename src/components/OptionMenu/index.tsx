import React from "react"
import { IOptionItem } from "../../domain/option"
import styles from "./styles.module.css"
import useOpenMenu from "../../hooks/useOpenMenu"

interface IOptionMenu {
    option: IOptionItem
}
const OptionMenu = ({ option }: IOptionMenu): JSX.Element => {
  // const getValueObject = (key: string) => options[key as keyof IOptionsItem ]
  const { open, ref, handleClickMenu } = useOpenMenu()
  

  const validateOpenChild = open && option.child.length > 0
  const childObject = option.child[0]
  const getOptionKeysFn = React.useCallback(() => Object.values(childObject || {}), [childObject])
  const options = getOptionKeysFn()
  
  return (
    <div className={styles.content__option_menu} ref={ref}>
        <div onClick={handleClickMenu} className={ open ? styles.text_option__selected : styles.text_option} >{option.name}</div>
        {
            validateOpenChild && <div className={styles.content__display_menu}>
                { options.map(option => <div className={styles.option_menu} key={option.name}>
                    {option.name}
                </div>) }
            </div>
        }
    </div>
  )
}

export default OptionMenu
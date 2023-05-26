import React from "react";
import { IOptionsItem } from "../../domain/option"
import styles from './styles.module.css'
import OptionMenu from "../OptionMenu";

interface IOptionsMenu {
  options: IOptionsItem
}

const OptionsMenu = ({ options }: IOptionsMenu): JSX.Element => {

  const getOptionKeysFn = React.useCallback(() => Object.keys(options || {}), [options])
  const optionKeysItems = getOptionKeysFn()
  
  const getValueObject = (key: string) => options[key as keyof IOptionsItem ]
  
  return (
    <div className={styles.content__menu_items}>
      {
        optionKeysItems.map(key => <OptionMenu key={key} option={getValueObject(key)} />)
      }
    </div>
  )
}

export default OptionsMenu
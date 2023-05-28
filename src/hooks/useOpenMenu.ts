import React from 'react'

const useOpenMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  const ref = React.useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => setOpen(false)
  const handleClickMenu = () => setOpen(prevState => !prevState)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onClickOutside && onClickOutside()
    }
    
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [onClickOutside])

  return {
    open,
    ref,
    handleClickMenu,
  }
}

export default useOpenMenu
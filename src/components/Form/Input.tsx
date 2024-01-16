// import React, { InputHTMLAttributes } from 'react'
// import Heading from './Heading'
// import { classes } from './classes'

// interface InputProps extends InputHTMLAttributes<InputProps> {
//   wrapper?: string
//   className?: string
//   onValueChange: (name: string, value: string) => void
//   name: string
//   label?: string | null
//   error?: string
//   errorLabel?: string
//   validator?: (name: string, value: string | number, errorLabel?: string) => string | boolean
// }
// export default function Input({
//   onValueChange,
//   name,
//   label = null,
//   error,
//   validator,
//   errorLabel,
//   wrapper = classes.inputWrapper,
//   ...props
// }: InputProps) {
//   const handleChange = React.useCallback(
//     (e:React.EventHandler<HTMLInputElement>) => {
//       const {name, value}=e.target
//       if (validator) {
//         const err = validator(name, value, errorLabel)
//         onValueChange(name, { value: value, error: err })
//       } else {
//         onValueChange(name, { value: value, error: false })
//       }
//     },
//     [name]
//   )
//   return (
//     <View className="w-full">
//       {label && <Heading size="md" className="mb-2" title={label} />}
//       <input
//         placeholder="#7e7c7c"
//         onChange={handleChange}

//         className={`flex flex-row items-center ${wrapper}`}
//         {...props}
//       />
//       {error && (
//         <Heading
//           size="sm"
//           className="text-[#743939] dark:text-[#e77c7c]"
//           title={error ? error : ''}
//         />
//       )}
//     </View>
//   )
// }

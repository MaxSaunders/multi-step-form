type InputFieldProps = {
    register: Function,
    name: String,
    required: boolean,
    label?: String,
    helperText?: String,
    fieldStatus?: String,
    validate?: Function
}

function InputField({ register, name, required, label, helperText, fieldStatus, validate }: InputFieldProps) {
    return (
        <>
            <input className={`form-control border-${fieldStatus}`} {...register(name, { required: required && `${label || name?.toUpperCase()} is Required`, validate: validate })} />
            {helperText && <span className={`text-${fieldStatus}`}>{helperText}</span>}
        </>
    )
}

export default InputField

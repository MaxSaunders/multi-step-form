import { ReactElement, useState } from 'react'

export function useMultiStepForm({
  steps,
  validation,
  titles,
  handleSubmit
}: FormProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const validateCurrentIndex = async () => {
    // validation should return true if valid, false if there are errors
    return await validation?.[currentStepIndex]()
  }

  const next = async () => {
    const isValid = await validateCurrentIndex()
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1 || !isValid) {
        return i
      }
      return i + 1
    })
  }

  const back = async () => {
    const isValid = await validateCurrentIndex()
    setCurrentStepIndex(i => {
      if (i <= 0 || !isValid) {
        return i
      }
      return i - 1
    })
  }

  const goTo = async (index: number) => {
    const isValid = await validateCurrentIndex()
    if (isValid) {
      setCurrentStepIndex(index)
    }
  }

  return {
    currentStepIndex,
    step: steps?.[currentStepIndex],
    steps,
    stepsLength: steps?.length,
    title: titles?.[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps?.length - 1,
    goTo,
    next,
    back,
    submit: (props: any) => handleSubmit(props)
  }
}

type FormProps = {
  steps: ReactElement[]
  validation?: Function[]
  titles: String[]
  handleSubmit: Function
}


export default useMultiStepForm
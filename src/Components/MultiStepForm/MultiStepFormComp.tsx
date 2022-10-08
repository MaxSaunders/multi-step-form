import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MDBContainer as Container, MDBRow as Row, MDBCol as Col } from 'mdb-react-ui-kit'

import useMultiStepForm from './useMultiStepForm'
import AccountForm from './FormPages/AccountForm'
import QuestionnaireForm from './FormPages/Questionnaire'
import JobForm from './FormPages/JobForm'
import './MultiStepForm.scss'

export function MultiStepForm() {
    const [output, setOuput] = useState('')
    const { register, handleSubmit, watch, formState, trigger } = useForm({ mode: 'onChange' })
    const { errors } = formState

    const _handleSubmit = (data: any) => {
        setOuput(data)
    }

    const steps = [
        <AccountForm register={register} errors={errors} />,
        <QuestionnaireForm register={register} errors={errors} />,
        <JobForm register={register} errors={errors} />,
    ]

    const { title, currentStepIndex, stepsLength, step, isFirstStep, isLastStep, next, back, submit } = useMultiStepForm({
        steps,
        validation: [
            () => trigger('Account'),
            () => trigger('Questionnaire'),
            () => trigger('Questionnaire')
        ],
        titles: ['Account', 'Questionare', 'Questionare'],
        handleSubmit: handleSubmit(_handleSubmit)
    })

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <Container className='form-container container-sm p-4'>
                    <Row>
                        <Col className='d-flex justify-content-start m-2'>
                            <h2 className='fw-bold text-decoration-underline'>{title}</h2>
                        </Col>
                        <Col className='d-flex justify-content-end mb-4'>
                            {`${currentStepIndex + 1} / ${stepsLength}`}
                        </Col>
                    </Row>
                    <div className='step-container'>
                        {step}
                    </div>
                    <Row className='button-bar d-flex row justify-content-between mt-5'>
                        <Col size={6} className=''>
                            <button disabled={isFirstStep} type='button' className='btn btn-block btn-lg btn-dark' onClick={back}>Back</button>
                        </Col>
                        <Col size={6} className='d-flex justify-content-end'>
                            {!isLastStep ?
                                <button disabled={isLastStep} type='button' className='btn btn-block btn-lg btn-primary' onClick={next}>Next</button>
                                : <button type='button' className='btn btn-block btn-lg btn-primary' onClick={submit}>Submit</button>
                            }
                        </Col>
                    </Row>
                </Container>
            </div >
            <Container className='mt-5'>
                {Object.entries(output)?.map(([key, value]: [string, string], index) => {
                    if (typeof value === 'object') {
                        return (
                            <div key={`${index}-${key}-printOut`}>
                                <Row>
                                    <Col size={12} className='fw-bold'>
                                        {key}:
                                    </Col>
                                </Row>
                                <Row className='mb-4'>
                                    {Object.entries(value)?.map(([key2, value2]: [any, any], index2) =>
                                        <Col size={3} key={`${index}-${index2}-${key2}`}>
                                            {`${key2?.toUpperCase()}: ${value2}`}
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        )
                    }
                    return (
                        <Row>
                            <Col size={12}>
                                {`${key}: ${value}`}
                            </Col>
                        </Row>
                    )
                }
                )}
            </Container>
        </>
    )
}

export default MultiStepForm

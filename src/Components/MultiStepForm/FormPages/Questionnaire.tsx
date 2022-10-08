import { MDBContainer, MDBRow as Row, MDBCol as Col } from 'mdb-react-ui-kit'
import InputField from './inputField'

type QuestionnaireProps = {
    register: Function,
    errors: any
}

export function QuestionnaireForm({ register, errors }: QuestionnaireProps) {
    const { Questionnaire: questionnaireErrors } = errors
    const fieldStatus = (fieldName: string) => questionnaireErrors?.[fieldName] ? 'danger' : ''
    const helperText = (fieldName: string) => questionnaireErrors?.[fieldName]?.message

    return (
        <MDBContainer className='align-items-start'>
            <Row className='mb-2 d-flex align-items-center'>
                <Col xs={12} lg={6}>
                    <label>Your Age</label>
                </Col>
                <Col xs={12} lg={6}>
                    <InputField register={register} label='Your Age' name='Questionnaire.age' required helperText={helperText('age')} fieldStatus={fieldStatus('age')} />
                </Col>
            </Row>
            <Row className='mb-2 d-flex align-items-center'>
                <Col xs={12} lg={6}>
                    <label>Gender</label>
                </Col>
                <Col xs={12} lg={6}>
                    <InputField register={register} label='Gender' name='Questionnaire.gender' required helperText={helperText('gender')} fieldStatus={fieldStatus('gender')} />
                </Col>
            </Row>
            <Row className='mb-2 d-flex align-items-center'>
                <Col xs={12} lg={6}>
                    <label>Home State</label>
                </Col>
                <Col xs={12} lg={6}>
                    <InputField register={register} label='Home State' name='Questionnaire.homeState' required helperText={helperText('homeState')} fieldStatus={fieldStatus('homeState')} />
                </Col>
            </Row>
        </MDBContainer>
    )
}

export default QuestionnaireForm

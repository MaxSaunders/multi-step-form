import { MDBContainer, MDBRow as Row, MDBCol as Col } from 'mdb-react-ui-kit'
import InputField from './inputField'

type JobFormProps = {
    register: Function,
    errors: any
}

export function JobForm({ register, errors }: JobFormProps) {
    const { Job: jobErrors } = errors
    const fieldStatus = (fieldName: string) => jobErrors?.[fieldName] ? 'danger' : ''
    const helperText = (fieldName: string) => jobErrors?.[fieldName]?.message

    return (
        <MDBContainer className='align-items-start'>
            <Row className='mb-2 d-flex align-items-center'>
                <Col xs={12} lg={6}>
                    <label>Job Title</label>
                </Col>
                <Col xs={12} lg={6}>
                    <InputField register={register} label='Job Title' name='Job.jobTitle' required helperText={helperText('jobTitle')} fieldStatus={fieldStatus('jobTitle')} />
                </Col>
            </Row>
            <Row className='mb-2 d-flex align-items-center'>
                <Col xs={12} lg={6}>
                    <label>Salary</label>
                </Col>
                <Col xs={12} lg={6}>
                    <InputField register={register} label='Salary' name='Job.salary' required helperText={helperText('salary')} fieldStatus={fieldStatus('salary')} />
                </Col>
            </Row>
        </MDBContainer>
    )
}

export default JobForm

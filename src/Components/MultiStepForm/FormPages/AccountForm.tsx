import { MDBContainer, MDBRow as Row, MDBCol as Col } from 'mdb-react-ui-kit'
import InputField from './inputField'

type AccountFormProps = {
  register: Function,
  errors: any
}

export function AccountForm({ register, errors }: AccountFormProps) {
  const { Account: accountErrors } = errors
  const fieldStatus = (fieldName: string) => accountErrors?.[fieldName] ? 'danger' : ''
  const helperText = (fieldName: string) => accountErrors?.[fieldName]?.message

  return (
    <MDBContainer className='align-items-start'>
      <Row className='mb-2 d-flex align-items-center'>
        <Col xs={12} lg={6}>
          <label>First Name</label>
        </Col>
        <Col xs={12} lg={6}>
          <InputField register={register} label='First Name' name='Account.firstName' required helperText={helperText('firstName')} fieldStatus={fieldStatus('firstName')} />
        </Col>
      </Row>
      <Row className='mb-2 d-flex align-items-center'>
        <Col xs={12} lg={6}>
          <label>Last Name</label>
        </Col>
        <Col xs={12} lg={6}>
          <InputField register={register} label='Last Name' name='Account.lastName' required helperText={helperText('lastName')} fieldStatus={fieldStatus('lastName')} />
        </Col>
      </Row>
      <Row className='mb-2 d-flex align-items-center'>
        <Col xs={12} lg={6}>
          <label>Email</label>
        </Col>
        <Col xs={12} lg={6}>
          <InputField register={register} label='Email' name='Account.email' required helperText={helperText('email')} fieldStatus={fieldStatus('email')} validate={(e: string) => e?.includes('@') || 'A valid email address is required'} />
        </Col>
      </Row>
      <Row className='mb-2 d-flex align-items-center'>
        <Col xs={12} lg={6}>
          <label>Password</label>
        </Col>
        <Col xs={12} lg={6}>
          <InputField register={register} label='Password' name='Account.password' required helperText={helperText('password')} fieldStatus={fieldStatus('password')} validate={(e: string) => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e) || 'Password must contain a special character'} />
        </Col>
      </Row>
    </MDBContainer>
  )
}

export default AccountForm

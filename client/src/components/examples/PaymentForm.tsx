import PaymentForm from '../PaymentForm'

export default function PaymentFormExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600">
      <PaymentForm 
        amount={150}
        serviceName="Color Treatment"
      />
    </div>
  )
}
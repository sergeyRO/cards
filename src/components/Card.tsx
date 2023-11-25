interface CardProps {
    children: React.ReactNode,
    picture?: React.ReactNode
}
export const Card = ({children, picture}: CardProps) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        {picture}
        <div className="card-body">
            {children}
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card

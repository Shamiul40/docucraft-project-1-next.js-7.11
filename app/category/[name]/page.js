
export  default async function CategoryPage({params }) {

  const {name} = await params

  return (
    <div>
      <h1 className='text-3xl '>{name}</h1>
    </div>
  )
}
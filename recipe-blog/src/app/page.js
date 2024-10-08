import Image from "next/image";
import { createClient } from "contentful";

const onFetchEntries = async() => {
  try {
    const client = createClient({
      space: 'ucmtl8797ics', 
      accessToken: 'KSrqf5i2FBDusMZu7byAI6yMLye8Tbi61s6UV_n8LK0'
    })

    const res = await client.getEntries({content_type: 'recipe-blog'})
  
    return res.items 
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {

  const recipe = await onFetchEntries()
  console.log(recipe[0].fields.description.content[0].content[0].content[1].content)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        recipe.map((item, index) => {
          return(
            <div>
              {item.fields.title}
              <ol>
                {item?.fields?.description?.content[0]?.content[0]?.content[1]?.content?.map((itm, idx) => {
                  return(
                    <li>
                      {itm?.content[0]?.content[0]?.value}
                    </li>
                  )
                })}
              </ol>
            </div>
          )
        })
      }

<form>
  <input type="text" name="comment" placeholder="Masukkan komentar..." />
  <button type="submit">Submit</button>
</form>
    </div>
  );
}

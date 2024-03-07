import DoughnutChart from "./DoughnutChart";



export default function Tokenomics(){

    return(

        <div className="border p-5 w-full bg-white my-2 rounded-xl xl:w-66 md:p-5">
            <h1 className="text-3xl">Tokenomics</h1>
            <div className="py-4">
                <h2 className="text-2xl py-3">Initial Distribution</h2>
                <DoughnutChart/> 
                <section className="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum non asperiores
                     ipsam mollitia cumque nemo culpa architecto esse sint, quidem enim hic ullam? Maiores quas ad odit eius sint eaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore 
                    asperiores earum! Facere in, commodi eius accusantium quibusdam debitis cumque eligendi molestias, ducimus quasi veritatis quas inventore sunt consectetur provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas magnam
                     voluptatem aliquam similique aperiam nesciunt esse quis ipsum laboriosam. Odio, mollitia explicabo animi fuga quisquam eius dicta facilis ducimus.
                </section>
            </div>
        </div>
    )
}
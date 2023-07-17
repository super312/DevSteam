import Image from 'next/image'

import styles from './saleCards.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullprice, discountprice }) {
    return (
        <div className={styles.salecard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R${fullprice}</p>
                        <h4 className={styles.discountprice}>R${discountprice}</h4>
                    </div>
                </div>
                <Button fullwidth>ADICIONAR AO CARRINHO</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: '50%',
    fullprice: '150',
    discountprice: '75'
}
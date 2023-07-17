import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard image={'league-of-legends.jpg'}
                discount={'50%'}
                fullprice={'150,00'}
                discountprice={'75,00'}
                />
              <SaleCard image={'dota-2.jpg'}
                discount={'25%'}
                fullprice={'40,40'}
                discountprice={'30,30'}
              />
              <SaleCard image={'valorant.jpg'}
                discount={'90%'}
                fullprice={'399,99'}
                discountprice={'39,99'}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
//git remote add origin https://github.com/super312/DevSteam.git
//git branch -M main
//git push -u origin main
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

export default function About () {
  return (
    <Container>
      <Hero title='About' subtitle='About development activities' />

    <TwoColumn>
      <TwoColumnMain>
        <PostBody>
        <p>
         Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザイン
        など、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提         案し続けています。
        </p>
        <h2>ものづくりで目指していること </h2>
        <p>
        ものづくりではデータの解析からクリエイティブまで幅広いことを担当していいます。新しいこ
        とを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。
        たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力をいれています。
        </p>
        <p>
        単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくり
        をしています。毎回課題解決テーマをもって「もの」と向き合い制作をし、フィードバックして
        もらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
        </p>
        <h3>新しいことへのチャレンジ</h3>
        <p>
        今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでも
        いいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み
        出すようなものづくりは、これからも続けていきたいです。
        </p>
        </PostBody>
      </TwoColumnMain>

      <TwoColumnSidebar>
        <Contact />
      </TwoColumnSidebar>
     </TwoColumn>
    </Container>
  )
}

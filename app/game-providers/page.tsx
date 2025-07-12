// app/game-providers/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Providers | Your Casino Platform',
  description: 'Explore our extensive collection of premium game providers',
};

const GameProvidersPage = () => {
  const providerLogos = [
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-100hp-gaming-logo-2488.png?itok=sMcw2-aK',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-1x2-gaming-logo-850.png?itok=I65J5hZ1',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-3-oaks-gaming-logo-851.png?itok=GoyPR0xL',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-7777-gaming-logo-852.png?itok=eqYk-sIr',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-7mojos-logo-853.png?itok=XXReL3FH',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-absolute-live-gaming-logo-854.png?itok=6i2YZA53',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-adlunam-logo-855.png?itok=ooCLyxYT',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-airdice-logo-1743.png?itok=K5G0P6A7',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-amigo-gaming-logo-699.png?itok=LZQzAR57',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-amusnet-logo-2658.png?itok=rQ6ZixRe',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-apparat-gaming-logo-1757.png?itok=DXsuLlw2',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-armadillo-studios-logo-700.png?itok=uRxgo9L4',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-aviatrix-logo-452.png?itok=_F8B7blu',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-backseat-gaming-logo-1488.png?itok=TejPOAFP',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-betsoft-logo-702.png?itok=2h1DEljI',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-betsoft-gaming-logo-2664.png?itok=P6dFyVMb',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-bf-games-logo-703.png?itok=GW4JERne',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-bgaming-logo-701.png?itok=4wrU_NvT',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-big-time-gaming-logo-705.png?itok=S_8Q6nIj',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-bigpot-logo-704.png?itok=miwEbsdB',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-bitblox-logo-1756.png?itok=J5UtvjBc',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-bitville-gaming-logo-706.png?itok=SgpsDkKI',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-booming-games-logo-453.png?itok=NtNRcLGu',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-bullshark-games-logo-1492.png?itok=eVqBVsh4',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-caleta-logo-707.png?itok=bBp2IeNQ',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-creedroomz-logo-708.png?itok=dwRcaArK',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-ct-interactive-logo-709.png?itok=a7Bf-Zfz',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-dreamplay-logo-2650.png?itok=3EN4AE39',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-ea-gaming-logo-711.png?itok=80BLvNLc',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-egt-logo-712.png?itok=5u66_LIU',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-emirates-draw-logo-487.png?itok=kIJfCm8B',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-endorphina-logo-458.png?itok=sST9e5o4',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-evolution-logo-856.png?itok=Q758yPsn',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-evoplay-logo-516.png?itok=rI-J-9B8',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-ezugi-logo-456.png?itok=nl1K7lNe',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-fancy-shoes-studio-logo-866.png?itok=QWN1W5ae',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-fazi-logo-1748.png?itok=bwyg3oLi',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-fils-game-logo-714.png?itok=ryjDAYrW',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-flipluck-logo-715.png?itok=MiSMQPdB',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-galaxsys-logo-716.png?itok=s4q_yxAo',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-gamedaddy-logo-717.png?itok=k38hnLrM',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-gamzix-logo-460.png?itok=PP4oF56H',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-globalbet-logo-718.png?itok=uU9vHgTK',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-goldenrace-logo-719.png?itok=1_pcOkbO',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-habanero-logo-720.png?itok=VjfTaFSJ',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-hacksaw-gaming-logo-721.png?itok=PPmKe47N',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-iconic21-logo-2670.png?itok=pw25GIWX',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-iconix-poker-logo-722.png?itok=-ZsKFtEz',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-irondog-studio-logo-724.png?itok=VLSHmp3z',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-jvl-logo-725.png?itok=bJLnyAuX',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-ka-gaming-logo-726.png?itok=wdFji9kY',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-ladyluck-games-logo-727.png?itok=ixVjXmWQ',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-lgd-gaming-dreamtech-logo-710.png?itok=9g7lqel-',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-livegames-logo-1254.png?itok=ecDsFq2e',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-liw-games-logo-728.png?itok=bh4JRA2N',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-macaw-gaming-logo-729.png?itok=V4zw4xKe',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-mancala-gaming-logo-730.png?itok=IYjFO6mu',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-microgaming-logo-731.png?itok=W-UxPggg',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-netent-logo-732.png?itok=ugADhGTO',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-netgame-logo-733.png?itok=SN5kWHjX',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-nolimit-city-logo-488.png?itok=DfWusPl9',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-novomatic-logo-467.png?itok=LVCqi2KM',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-onegame-logo-2677.png?itok=jQbj6c8z',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-onetouch-logo-734.png?itok=VVCGSNMy',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-onlyplay-logo-1755.png?itok=WFQB-SBH',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-pascal-gaming-logo-2479.png?itok=k71ysaX7',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-pateplay-logo-1496.png?itok=FIh10Eq2',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-pg-soft-logo-735.png?itok=4qKEa5SE',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-platin-gaming-logo-469.png?itok=84fjXxMa',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-platipus-logo-736.png?itok=1m0en7rS',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-playson-logo-737.png?itok=8Fo6G4Ll',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-pop-ok-logo-738.png?itok=0eWV8keA',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-pragmatic-play-logo-490.png?itok=XZgigywZ',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-prospect-games-logo-739.png?itok=lnxeBgg6',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-red-rake-logo-740.png?itok=B9z6LbkH',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-red-stone-logo-2682.png?itok=bR5VjZJB',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-rocket-man-logo-744.png?itok=pRKtlDZv',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-rubyplay-logo-1500.png?itok=c9yOzPIC',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-skywind-group-logo-745.png?itok=SdkTwd_i',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-slotopia-logo-746.png?itok=GtcnTmql',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-smartsoft-gaming-logo-1504.png?itok=5p9aRex2',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-spearhead-logo-747.png?itok=iBQ41Grk',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-spinomenal-logo-749.png?itok=4ejygYi8',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-spribe-logo-477.png?itok=hrthhucW',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-tada-gaming-logo-1754.png?itok=wR5lIwaf',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-tiptop-logo-2689.png?itok=0qKWDK1x',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-turbo-games-logo-1508.png?itok=4dyTWWJm',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-v2g-logo-478.png?itok=i3IQgtzu',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-vivo-gaming-logo-750.png?itok=g6IB9_bh',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timless-tech-partners-wazdan-logo-751.png?itok=N0pre97l',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-yggdrasil-gaming-logo-2699.png?itok=NKt4wMLX',
    'https://timelesstech.io/sites/default/files/styles/icon_576x360_16_10_scaled_on_white_background/public/timeless-tech-game-providers-yoloplay-logo-2706.png?itok=Fkjw3NTV',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Game Providers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {`Explore our extensive collection of the world's leading game developers`}
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {providerLogos.map((logo, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32"
            >
              <Image
                src={logo}
                alt={`Game provider ${index + 1}`}
                width={200}
                height={120}
                className="object-contain h-full w-full"
                unoptimized // Remove this if you set up proper image optimization config
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to integrate these providers?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FF2432] text-white hover:bg-[#E02030] px-8 py-3 rounded-md font-semibold transition-colors shadow-lg hover:shadow-xl">
              Contact Us
            </button>
            {/* <button className="border-2 border-[#FF2432] text-[#FF2432] hover:bg-[#FF2432]/10 px-8 py-3 rounded-md font-semibold transition-colors">
              Request Demo
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProvidersPage;
import Head from 'next/head'
import React from 'react'
import {
  BankLogo,
  CanvaLogo,
  DeliveryLogo,
  FaceBookLogo,
  GoogleDriveLogo,
  GoogleExcel,
  GoogleMapsLogo,
  GoogleMyBussinessLogo,
  GooglePhotosLogo,
  GoogleReviewLogo,
  InstagramLogo,
  RemoveBackgroundLogo,
  SanityLogo,
  WebLogo,
  WhatsAppLogo,
  WixLogo,
  YoutubeLogo,
  YoutubeMusicLogo,
} from '../components/Apps'
import { CopyLinkButton } from '../components/CopyLinkButton'
import { OpenLinkButton } from '../components/OpenLinkButton'

export default function Home() {
  return (
    <div className="bg-pink-[#fee9f7]">
      <Head>
        <title>Shortcuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto flex min-h-screen max-w-7xl flex-wrap justify-center gap-4 pt-3 pb-3">
        <OpenLinkButton
          Title={''}
          Url={'bakesbyish.sanity.studio'}
          Icon={SanityLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Canva'}
          Url={'https://canva.com/'}
          Icon={CanvaLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Google Drive'}
          Url={'https://drive.google.com/'}
          Icon={GoogleDriveLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Excels'}
          Url={'https://docs.google.com/spreadsheets/u/0/'}
          Icon={GoogleExcel}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Remove Background'}
          Url={'https://remove.bg'}
          Icon={RemoveBackgroundLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'WhatsApp'}
          Url={'https://web.whatsapp.com/'}
          Icon={WhatsAppLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Web'}
          Url={'https://www.bakesbyish.com'}
          Icon={WebLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Google My Bussiness'}
          Url={'https://business.google.com/'}
          Icon={GoogleMyBussinessLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Wix'}
          Url={'https://wix.com'}
          Icon={WixLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Koombiyo'}
          Url={'https://koombiyodelivery.lk/'}
          Icon={DeliveryLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Facebook'}
          Url={'https://www.facebook.com/'}
          Icon={FaceBookLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Facebook Group'}
          Url={'https://www.facebook.com/groups/bakesbyish/'}
          Icon={FaceBookLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Facebook Page'}
          Url={'https://www.facebook.com/bakesbyishani'}
          Icon={FaceBookLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Instagram'}
          Url={'https://www.instagram.com/'}
          Icon={InstagramLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Google Photos'}
          Url={'https://photos.google.com/'}
          Icon={GooglePhotosLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Youtube Music'}
          Url={'https://music.youtube.com/'}
          Icon={YoutubeMusicLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Youtube'}
          Url={'https://www.youtube.com/'}
          Icon={YoutubeLogo}
          Hidden={true}
        />
        <OpenLinkButton
          Title={'Commercial Bank'}
          Url={'https://www.combankdigital.com/#/login'}
          Icon={BankLogo}
          Hidden={true}
        />
        <CopyLinkButton
          Title={'Share Facebook Reviews'}
          Text={'Vinuka Thejana'}
          Icon={FaceBookLogo}
          Hidden={true}
        />
        <CopyLinkButton
          Title={'Share Google Reviews'}
          Text={'https://g.page/r/CSkb66HBeuGmEAg/review'}
          Icon={GoogleReviewLogo}
          Hidden={false}
        />
        <CopyLinkButton
          Title={'Share Dirrections'}
          Text={'https://g.page/bakesbyish?share'}
          Icon={GoogleMapsLogo}
          Hidden={false}
        />
        <CopyLinkButton
          Title={'Copy Facebook Link'}
          Text={'https://www.facebook.com/bakesbyishani'}
          Icon={FaceBookLogo}
          Hidden={false}
        />
        <CopyLinkButton
          Title={'Copy Instagram Link'}
          Text={'https://www.instagram.com/bakes_by_ish/'}
          Icon={InstagramLogo}
          Hidden={false}
        />
        <CopyLinkButton
          Title={'Copy WhatsApp Link'}
          Text={'https://wa.link/bakesbyish'}
          Icon={WhatsAppLogo}
          Hidden={false}
        />
        <CopyLinkButton
          Title={'Copy Website link'}
          Text={'https://www.bakesbyish.com'}
          Icon={WebLogo}
          Hidden={false}
        />
      </div>
    </div>
  )
}

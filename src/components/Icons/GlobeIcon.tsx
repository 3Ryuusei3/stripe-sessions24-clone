interface GlobeIconProps {
  stroke?: string;
}

const GlobeIcon = ({ stroke }: GlobeIconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88"><path d="M44 87.043c11.886 0 21.522-19.27 21.522-43.043C65.522 20.228 55.886.957 44 .957S22.478 20.227 22.478 44c0 23.772 9.636 43.043 21.522 43.043Z" stroke={stroke} strokeWidth=".976" strokeMiterlimit="10"></path><path d="M44 87.043c23.772 0 43.043-19.27 43.043-43.043C87.043 20.228 67.773.957 44 .957 20.228.957.957 20.227.957 44c0 23.772 19.27 43.043 43.043 43.043ZM44 87.043V.957M.957 44h86.087M6.714 22.478h74.57M6.714 65.522h74.57M15.528 11.717h56.944M2.313 33.24h83.374M2.313 54.76h83.374M15.528 76.283h56.944" stroke={stroke} strokeWidth=".976" strokeMiterlimit="10"></path><path d="M44 87.043c5.943 0 10.761-19.27 10.761-43.043 0-23.772-4.818-43.043-10.76-43.043-5.944 0-10.762 19.27-10.762 43.043 0 23.772 4.818 43.043 10.761 43.043Z" stroke={stroke} strokeWidth=".976" strokeMiterlimit="10"></path><path d="M44 87.043c17.83 0 32.282-19.27 32.282-43.043C76.282 20.228 61.83.957 44 .957 26.17.957 11.717 20.227 11.717 44c0 23.772 14.454 43.043 32.283 43.043Z" stroke={stroke} strokeWidth=".976" strokeMiterlimit="10"></path></svg>
)
export default GlobeIcon;

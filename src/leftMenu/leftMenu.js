import React, { Component } from 'react';
import "./leftMenu.scss";
import {NavLink} from "react-router-dom";

class LeftMenu extends Component {

        render() {
            return(
                <div className="left-menu">
                    <img className="main-logo" src="./assets/images/img/logo.png" alt=""/>
                    <nav className="navigation-block">
                        <NavLink exact to="/" activeClassName="active">
                            <div className="navigation-link">
                                <svg  className="left-menu-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.74483 15.0899C8.45698 15.0905 8.18088 14.9759 7.97803 14.7717L7.21124 14.0049C7.0048 13.8281 6.91488 13.5505 6.97845 13.2862C7.04201 13.022 7.24834 12.8157 7.51259 12.7521C7.77685 12.6885 8.05443 12.7784 8.23122 12.9849L8.74483 13.4985L8.99801 13.2453C9.05258 13.1904 9.08808 13.1194 9.09929 13.0428L9.52609 10.0624C9.57142 9.75246 9.71611 9.46561 9.93842 9.24496L11.7397 7.44372C12.965 6.22665 13.6527 4.57002 13.6494 2.84296V1.44681H12.2533C10.5262 1.44353 8.86957 2.13119 7.65251 3.35656L5.85127 5.1578C5.63061 5.38011 5.34376 5.5248 5.03384 5.57014L2.04624 5.99694C1.96962 6.00814 1.89862 6.04364 1.84369 6.09821L1.5905 6.3514L2.10411 6.865C2.31055 7.04179 2.40047 7.31938 2.3369 7.58363C2.27334 7.84789 2.06701 8.05421 1.80276 8.11778C1.5385 8.18134 1.26092 8.09142 1.08413 7.88498L0.317337 7.11819C-0.105779 6.69455 -0.105779 6.00825 0.317337 5.5846L0.830943 5.071C1.10685 4.79455 1.46454 4.61443 1.85092 4.55739L4.83852 4.13059L6.63976 2.32935C8.12941 0.832479 10.156 -0.00627152 12.2677 3.53116e-05H14.3728C14.7723 3.53116e-05 15.0962 0.323908 15.0962 0.723425V2.84296C15.1025 4.95474 14.2637 6.98129 12.7669 8.47093L10.9656 10.2722L10.5388 13.2598C10.4818 13.6462 10.3017 14.0038 10.0252 14.2797L9.51162 14.7934C9.30525 14.9896 9.02957 15.0963 8.74483 15.0899ZM5.1639 12.9849L6.18388 11.9649C6.42967 11.6779 6.41315 11.2501 6.14595 10.9829C5.87875 10.7157 5.45092 10.6991 5.1639 10.9449L4.14392 11.9649C3.93749 12.1417 3.84756 12.4193 3.91113 12.6835C3.9747 12.9478 4.18102 13.1541 4.44527 13.2177C4.70953 13.2812 4.98711 13.1913 5.1639 12.9849ZM2.09692 11.9649L4.14411 9.91771C4.3899 9.63069 4.37337 9.20286 4.10618 8.93566C3.83898 8.66846 3.41114 8.65193 3.12413 8.89773L1.07694 10.9449C0.870498 11.1217 0.780576 11.3993 0.844142 11.6635C0.907707 11.9278 1.11403 12.1341 1.37829 12.1977C1.64254 12.2613 1.92013 12.1713 2.09692 11.9649ZM11.3057 6.85054C12.1519 6.00325 12.1519 4.63065 11.3057 3.78337C11.1289 3.57693 10.8513 3.48701 10.5871 3.55057C10.3228 3.61414 10.1165 3.82046 10.0529 4.08472C9.98935 4.34897 10.0793 4.62656 10.2857 4.80335C10.4227 4.93917 10.4997 5.12407 10.4997 5.31695C10.4997 5.50984 10.4227 5.69473 10.2857 5.83056C10.0036 6.11103 9.54788 6.11103 9.26573 5.83056C9.12878 5.69473 9.05175 5.50984 9.05175 5.31695C9.05175 5.12407 9.12878 4.93917 9.26573 4.80335C9.51152 4.51633 9.49499 4.0885 9.22779 3.8213C8.9606 3.5541 8.53276 3.53758 8.24575 3.78337C7.66514 4.32438 7.42615 5.13916 7.62252 5.90807C7.81888 6.67699 8.4193 7.2774 9.18821 7.47377C9.95713 7.67014 10.7719 7.43114 11.3129 6.85054H11.3057Z"/>
                                </svg>
                                Discover
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.54692 15C2.27085 14.9996 1.99591 14.9646 1.72848 14.8958C0.733813 14.5697 0.045024 13.6586 0 12.6095C0 10.6726 1.99722 10.1577 3.05386 10.1577C3.39118 10.1577 3.66463 10.4321 3.66463 10.7706C3.66463 11.1092 3.39118 11.3836 3.05386 11.3836C2.98057 11.3836 1.22154 11.3836 1.22154 12.6095C1.27442 13.0911 1.58291 13.5062 2.02776 13.6944C2.69198 13.8605 3.39535 13.7039 3.92726 13.2715C4.53311 12.7966 4.88872 12.0693 4.89228 11.2978V2.48351C4.8989 1.69027 5.25159 0.939788 5.8573 0.430114C6.29409 0.0623671 6.87657 -0.0803736 7.43309 0.043954C9.00278 0.405596 11 2.6061 11 4.56142C10.9378 5.57678 10.3455 6.48354 9.44253 6.9458C9.14063 7.09814 8.77284 6.97602 8.62104 6.67304C8.46925 6.37006 8.59094 6.00095 8.89284 5.84862C9.38366 5.59176 9.71547 5.1072 9.77846 4.55529C9.77846 3.15162 8.14159 1.49052 7.15825 1.23308C6.96594 1.19249 6.76591 1.24723 6.62077 1.38019C6.30572 1.65562 6.12155 2.052 6.11383 2.47125V11.2855C6.11047 12.4339 5.584 13.5177 4.68462 14.2277C4.07911 14.7195 3.32584 14.9916 2.54692 15Z"/>
                                </svg>
                                Songs
                            </div>
                        </NavLink>
                        <NavLink to="/albums" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.2871 15.9866H6.01414C5.64426 15.9866 5.34441 15.6868 5.34441 15.3169C5.34441 14.947 5.64426 14.6471 6.01414 14.6471H10.2871C10.5175 14.6472 10.7053 14.4623 10.709 14.2319V6.52323C10.7088 6.41303 10.6656 6.30726 10.5884 6.22855L8.50556 4.14567C8.42725 4.06793 8.32122 4.02455 8.21088 4.02512H4.43357C4.20316 4.02877 4.0183 4.21661 4.01833 4.44705V15.3303C4.01833 15.7001 3.71848 16 3.34859 16C2.97871 16 2.67886 15.7001 2.67886 15.3303V4.44705C2.68255 3.47687 3.47008 2.69233 4.44026 2.69234H8.21758C8.68507 2.69075 9.13371 2.87648 9.46328 3.20804L11.5462 5.29092C11.8758 5.62175 12.0612 6.06958 12.0619 6.53663V14.2453C12.0508 15.2155 11.2573 15.994 10.2871 15.9866ZM1.33278 12.6379V1.75471C1.33643 1.5243 1.52427 1.33944 1.75471 1.33947H6.20176C6.57164 1.33947 6.87149 1.03962 6.87149 0.669736C6.87149 0.299851 6.57164 0 6.20176 0H1.75471C0.784528 0.00368893 -7.01315e-06 0.791218 0 1.76141V12.6446C0 13.0145 0.299851 13.3144 0.669736 13.3144C1.03962 13.3144 1.33947 13.0145 1.33947 12.6446L1.33278 12.6379Z" />
                                </svg>
                                Albums
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 16H3.33333C2.96514 16 2.66667 15.7015 2.66667 15.3333C2.66667 14.9652 2.96514 14.6667 3.33333 14.6667H10C10.3682 14.6667 10.6667 14.3682 10.6667 14V11.2333C10.6331 10.8593 10.4088 10.529 10.0733 10.36C7.46025 9.30497 4.53975 9.30497 1.92667 10.36C1.59125 10.529 1.36689 10.8593 1.33333 11.2333V15.3333C1.33333 15.7015 1.03486 16 0.666667 16C0.298477 16 0 15.7015 0 15.3333V11.2333C0.0294815 10.3131 0.58421 9.4914 1.42667 9.12C4.36032 7.93454 7.63968 7.93454 10.5733 9.12C11.4158 9.4914 11.9705 10.3131 12 11.2333V14C12 15.1046 11.1046 16 10 16ZM9.33334 3.33333C9.33334 1.49238 7.84095 0 6 0C4.15905 0 2.66667 1.49238 2.66667 3.33333C2.66667 5.17428 4.15905 6.66667 6 6.66667C7.84095 6.66667 9.33334 5.17428 9.33334 3.33333ZM8 3.33333C8 4.4379 7.10457 5.33334 6 5.33334C4.89543 5.33334 4 4.4379 4 3.33333C4 2.22876 4.89543 1.33333 6 1.33333C7.10457 1.33333 8 2.22876 8 3.33333Z"/>
                                </svg>
                                Artists
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1.36112 12.073C1.2419 12.0738 1.12456 12.0433 1.02084 11.9845C0.386636 11.6184 -0.00289117 10.9406 1.61616e-05 10.2083V2.04166C-0.000451798 1.31178 0.388748 0.637167 1.02084 0.272227C1.23181 0.138118 1.49931 0.130462 1.7176 0.252288C1.93589 0.374113 2.06982 0.605807 2.06643 0.855766C2.06305 1.10572 1.9229 1.33371 1.7014 1.44958C1.48999 1.57163 1.36015 1.79756 1.36112 2.04166V10.2083C1.36015 10.4524 1.48999 10.6783 1.7014 10.8004C1.97104 10.9532 2.10339 11.2688 2.02333 11.5683C1.94328 11.8677 1.67104 12.0752 1.36112 12.073ZM15.3129 11.9777C15.945 11.6128 16.3342 10.9382 16.3337 10.2083V2.04165C16.3332 1.3156 15.9471 0.644469 15.3197 0.279024C15.1087 0.144915 14.8412 0.13726 14.6229 0.259085C14.4047 0.380911 14.2707 0.612604 14.2741 0.862563C14.2775 1.11252 14.4176 1.34051 14.6392 1.45638C14.8485 1.57721 14.978 1.79998 14.9794 2.04165V10.2083C14.9804 10.4524 14.8506 10.6783 14.6392 10.8004C14.4176 10.9162 14.2775 11.1442 14.2741 11.3942C14.2707 11.6441 14.4047 11.8758 14.6229 11.9977C14.8412 12.1195 15.1087 12.1118 15.3197 11.9777H15.3129ZM4.08289 10.8888C3.70703 10.8888 3.40233 11.1935 3.40233 11.5694C3.40233 11.9452 3.70703 12.2499 4.08289 12.2499C4.45874 12.2499 4.76344 11.9452 4.76344 11.5694C4.76344 11.1935 4.45874 10.8888 4.08289 10.8888ZM6.80571 10.8888C6.42985 10.8888 6.12516 11.1935 6.12516 11.5694C6.12516 11.9452 6.42985 12.2499 6.80571 12.2499C7.18157 12.2499 7.48626 11.9452 7.48626 11.5694C7.48626 11.1935 7.18157 10.8888 6.80571 10.8888ZM9.52766 10.8888C9.1518 10.8888 8.84711 11.1935 8.84711 11.5694C8.84711 11.9452 9.1518 12.2499 9.52766 12.2499C9.90352 12.2499 10.2082 11.9452 10.2082 11.5694C10.2082 11.1935 9.90352 10.8888 9.52766 10.8888ZM12.2501 10.8888C11.8742 10.8888 11.5695 11.1935 11.5695 11.5694C11.5695 11.9452 11.8742 12.2499 12.2501 12.2499C12.6259 12.2499 12.9306 11.9452 12.9306 11.5694C12.9306 11.1935 12.6259 10.8888 12.2501 10.8888ZM4.08289 0C3.70703 0 3.40233 0.304693 3.40233 0.680552C3.40233 1.05641 3.70703 1.3611 4.08289 1.3611C4.45874 1.3611 4.76344 1.05641 4.76344 0.680552C4.76344 0.304693 4.45874 0 4.08289 0ZM6.80571 0C6.42985 0 6.12516 0.304693 6.12516 0.680552C6.12516 1.05641 6.42985 1.3611 6.80571 1.3611C7.18157 1.3611 7.48626 1.05641 7.48626 0.680552C7.48626 0.304693 7.18157 0 6.80571 0ZM9.52766 0C9.1518 0 8.84711 0.304693 8.84711 0.680552C8.84711 1.05641 9.1518 1.3611 9.52766 1.3611C9.90352 1.3611 10.2082 1.05641 10.2082 0.680552C10.2082 0.304693 9.90352 0 9.52766 0ZM12.2501 0C11.8742 0 11.5695 0.304693 11.5695 0.680552C11.5695 1.05641 11.8742 1.3611 12.2501 1.3611C12.6259 1.3611 12.9306 1.05641 12.9306 0.680552C12.9306 0.304693 12.6259 0 12.2501 0ZM7.48612 8.84717V4.76386L9.58222 6.39718L9.1875 6.62857C8.96599 6.74444 8.82584 6.97243 8.82246 7.22239C8.81908 7.47234 8.953 7.70404 9.17129 7.82586C9.38958 7.94769 9.65708 7.94003 9.86805 7.80593L11.1339 7.06412C11.3282 6.95008 11.4534 6.74727 11.4684 6.52248C11.4834 6.29768 11.3862 6.08004 11.2087 5.94121L7.2207 2.83109C7.0155 2.66893 6.73553 2.63871 6.50045 2.75335C6.26538 2.86799 6.11679 3.10719 6.11821 3.36873V8.81314C6.11821 9.189 6.4229 9.49369 6.79876 9.49369C7.17462 9.49369 7.47931 9.189 7.47931 8.81314L7.48612 8.84717Z" />
                                </svg>
                                YouTube
                            </div>
                        </NavLink>
                        <div className="title">My Tracks</div>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.0969 12.9938H7.36905C6.87359 12.9933 6.39859 12.7973 6.04847 12.4488L5.17017 11.5755C4.9924 11.4241 4.91497 11.1865 4.96971 10.9602C5.02445 10.734 5.20211 10.5573 5.42966 10.5029C5.65721 10.4485 5.89624 10.5255 6.04847 10.7022L6.92678 11.5755C7.04433 11.6914 7.20347 11.7561 7.36905 11.7551H12.0969C12.392 11.7629 12.6521 11.5638 12.7199 11.2782L13.7601 6.94282C13.8047 6.75571 13.7593 6.55864 13.6373 6.40945C13.5153 6.26025 13.3305 6.17586 13.1372 6.18103H8.48406C8.05295 6.1808 7.6526 5.95898 7.4256 5.59458C7.19859 5.23018 7.1772 4.77499 7.36905 4.39113L8.44668 2.2544C8.55588 2.03745 8.5454 1.77996 8.41893 1.57249C8.29247 1.36502 8.06773 1.23664 7.82377 1.23249L5.13279 5.24582C4.62307 6.00495 4.30863 6.87691 4.21711 7.78512L3.86205 11.3278C3.76573 12.2807 2.95661 13.0048 1.99332 13H1.86874C0.836661 13 0 12.1681 0 11.142V6.18722C0 5.16106 0.836661 4.3292 1.86874 4.3292C2.21276 4.3292 2.49165 4.60649 2.49165 4.94854C2.49165 5.29059 2.21276 5.56788 1.86874 5.56788C1.52471 5.56788 1.24582 5.84517 1.24582 6.18722V11.142C1.24582 11.484 1.52471 11.7613 1.86874 11.7613H1.98709C2.30819 11.7629 2.57789 11.5215 2.61 11.2039L2.96506 7.66125C3.07801 6.55424 3.46074 5.49131 4.08007 4.56455L6.77105 0.551216C7.00169 0.207505 7.38952 0.000766915 7.80508 1.90148e-06C8.48417 -0.000940396 9.11515 0.348397 9.47198 0.922866C9.8288 1.49734 9.86041 2.21471 9.55547 2.818L8.47783 4.95473H13.131C13.7022 4.95465 14.2422 5.21437 14.5967 5.65978C14.9512 6.10518 15.0813 6.68734 14.9499 7.2401L13.9096 11.5755C13.7059 12.4069 12.9576 12.9924 12.0969 12.9938Z"/>
                                </svg>
                                Favourite
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.17611 9.69508C7.79365 9.69508 7.4836 9.38503 7.4836 9.00257V3.62873L6.36174 1.38501H1.68041L2.37291 2.77002H5.40609C5.78855 2.77002 6.09859 3.08007 6.09859 3.46253C6.09859 3.84499 5.78855 4.15503 5.40609 4.15503H2.07513C1.73415 4.15576 1.42249 3.96232 1.27183 3.65643L0.0945689 1.30191C-0.0443627 1.02323 -0.0294095 0.692532 0.134107 0.427522C0.297623 0.162513 0.58648 0.000824216 0.897875 0H6.36867C6.89424 0.000278889 7.37437 0.298014 7.60825 0.768681L8.87554 3.30325V9.0095C8.87371 9.19316 8.79899 9.36858 8.66782 9.49715C8.53665 9.62573 8.35977 9.69692 8.17611 9.69508ZM15.1013 10.3876V6.23256C15.1013 5.8501 14.7913 5.54005 14.4088 5.54005C14.0263 5.54005 13.7163 5.8501 13.7163 6.23256V10.3876C13.7163 10.77 13.4063 11.0801 13.0238 11.0801H3.32872C2.94626 11.0801 2.63622 10.77 2.63622 10.3876V6.23256C2.63622 5.8501 2.32617 5.54005 1.94371 5.54005C1.56125 5.54005 1.25121 5.8501 1.25121 6.23256V10.3876C1.25121 11.535 2.18134 12.4651 3.32872 12.4651H13.0238C13.5748 12.4651 14.1032 12.2462 14.4928 11.8566C14.8824 11.467 15.1013 10.9386 15.1013 10.3876ZM15.1014 3.65643L16.2787 1.30191C16.4176 1.02323 16.4026 0.692532 16.2391 0.427522C16.0756 0.162513 15.7868 0.000824216 15.4754 0H9.56137C9.17891 0 8.86886 0.310045 8.86886 0.692505C8.86886 1.07497 9.17891 1.38501 9.56137 1.38501H14.6721L13.9796 2.77002H10.9464C10.5639 2.77002 10.2539 3.08007 10.2539 3.46253C10.2539 3.84499 10.5639 4.15503 10.9464 4.15503H14.2773C14.6203 4.15676 14.9345 3.96342 15.0876 3.65643H15.1014Z" />
                                </svg>
                                Recent History
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.125 12.5H11.875C11.5298 12.5 11.25 12.2202 11.25 11.875C11.25 11.5298 11.5298 11.25 11.875 11.25H13.125C13.4702 11.25 13.75 10.9702 13.75 10.625V4.375C13.75 4.02982 13.4702 3.75 13.125 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H13.125C14.1605 2.5 15 3.33947 15 4.375V10.625C15 11.6605 14.1605 12.5 13.125 12.5ZM4.375 11.875C4.375 11.5298 4.09518 11.25 3.75 11.25H1.875C1.52982 11.25 1.25 10.9702 1.25 10.625V1.875C1.25 1.52982 1.52982 1.25 1.875 1.25H5.73125C5.89738 1.24904 6.05705 1.31426 6.175 1.43125L6.43125 1.6875C6.67922 1.89986 7.04887 1.88558 7.27973 1.65473C7.51058 1.42387 7.52486 1.05423 7.3125 0.80625L7.05625 0.55C6.70496 0.198269 6.22836 0.00043763 5.73125 0H1.875C0.839466 0 0 0.839466 0 1.875V10.625C0 11.6605 0.839466 12.5 1.875 12.5H3.75C4.09518 12.5 4.375 12.2202 4.375 11.875ZM7.94361 12.3188L10.4436 9.81875C10.656 9.57078 10.6417 9.20113 10.4108 8.97027C10.18 8.73942 9.81034 8.72514 9.56236 8.9375L8.13111 10.3687V5.625C8.13111 5.27982 7.85129 5 7.50611 5C7.16094 5 6.88111 5.27982 6.88111 5.625V11.875C6.87964 12.1289 7.03193 12.3585 7.26644 12.4559C7.50095 12.5532 7.77106 12.499 7.94986 12.3188H7.94361ZM6.06881 10.4438C6.31114 10.2 6.31114 9.80628 6.06881 9.56251L5.44381 8.93751C5.29107 8.75915 5.05124 8.68146 4.82292 8.73638C4.59461 8.7913 4.41635 8.96956 4.36143 9.19787C4.30651 9.42619 4.3842 9.66602 4.56256 9.81876L5.18756 10.4438C5.43133 10.6861 5.82504 10.6861 6.06881 10.4438Z" />
                                </svg>
                                Download Items
                            </div>
                        </NavLink>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M11.9478 12.9999H2.03656C0.911799 12.9999 0 12.0809 0 10.9473V2.05262C0 0.918988 0.911799 0 2.03656 0H6.22508C6.76503 0.000479086 7.28269 0.217051 7.66425 0.602101L8.2277 1.16999C8.35581 1.29807 8.52924 1.36946 8.70969 1.36841H12.2194C12.5943 1.36841 12.8982 1.67474 12.8982 2.05262C12.8982 2.43049 12.5943 2.73682 12.2194 2.73682H8.70969C8.16974 2.73634 7.65208 2.51977 7.27052 2.13472L6.70707 1.56683C6.57896 1.43876 6.40552 1.36736 6.22508 1.36841H2.03656C1.66164 1.36841 1.35771 1.67474 1.35771 2.05262V10.9473C1.35771 11.3252 1.66164 11.6315 2.03656 11.6315H11.9478C12.2336 11.6314 12.4888 11.4508 12.5859 11.1799L14.6225 5.47364H5.9196L4.71803 9.11362C4.59993 9.4726 4.21545 9.66712 3.85928 9.54809C3.50311 9.42906 3.31011 9.04155 3.42821 8.68257L4.62978 5.04259C4.81421 4.48252 5.3341 4.1047 5.9196 4.10523H14.6429C15.0852 4.10542 15.4997 4.3228 15.7538 4.68779C16.0078 5.05278 16.0695 5.51962 15.9191 5.9389L13.8825 11.6452C13.5885 12.465 12.8127 13.0082 11.9478 12.9999Z"/>
                                </svg>
                                Local Files
                            </div>
                        </NavLink>
                        <div className="playlist">
                            Playlist
                            <svg className="playlist-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00136 6.48H3.50383C3.22814 6.48 3.00465 6.25651 3.00465 5.98082C3.00465 5.70513 3.22814 5.48164 3.50383 5.48164H5.00136C5.27704 5.48164 5.50053 5.70513 5.50053 5.98082C5.50053 6.25651 5.27704 6.48 5.00136 6.48ZM9.3493 10.9726C9.49732 10.8727 9.58082 10.7015 9.56834 10.5233C9.55586 10.3452 9.4493 10.1873 9.2888 10.109C9.1283 10.0308 8.93824 10.0441 8.79022 10.144C6.64793 11.6057 3.74706 11.2097 2.0749 9.22732C0.40274 7.24489 0.501467 4.31879 2.30345 2.45358C4.10543 0.588372 7.02639 0.388833 9.06528 1.99166C11.1042 3.59449 11.5999 6.47998 10.2129 8.67139C10.1175 8.82209 10.1097 9.01224 10.1925 9.17021C10.2753 9.32819 10.4361 9.42999 10.6143 9.43727C10.7925 9.44455 10.9611 9.35621 11.0565 9.20551C12.6938 6.60995 12.1047 3.19682 9.69201 1.3003C7.27936 -0.596214 3.82364 -0.36262 1.68817 1.84133C-0.447297 4.04529 -0.571727 7.50666 1.39998 9.85826C3.37169 12.2099 6.80171 12.691 9.34431 10.9726H9.3493ZM8.99488 5.98082C8.99488 5.70513 8.77139 5.48164 8.49571 5.48164H6.99818C6.72249 5.48164 6.499 5.70513 6.499 5.98082C6.499 6.25651 6.72249 6.48 6.99818 6.48H8.49571C8.77139 6.48 8.99488 6.25651 8.99488 5.98082ZM6.49897 8.47671V6.97918C6.49897 6.70349 6.27548 6.48001 5.99979 6.48001C5.7241 6.48001 5.50061 6.70349 5.50061 6.97918V8.47671C5.50061 8.7524 5.7241 8.97589 5.99979 8.97589C6.27548 8.97589 6.49897 8.7524 6.49897 8.47671ZM6.49897 4.98248V3.48495C6.49897 3.20926 6.27548 2.98577 5.99979 2.98577C5.7241 2.98577 5.50061 3.20926 5.50061 3.48495V4.98248C5.50061 5.25816 5.7241 5.48165 5.99979 5.48165C6.27548 5.48165 6.49897 5.25816 6.49897 4.98248Z" />
                            </svg>
                        </div>
                        <NavLink to="" activeClassName="active">
                            <div className="navigation-link">
                                <svg className="left-menu-icon" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.7 14H2.1C0.940202 14 0 13.0598 0 11.9V2.1C0 0.940202 0.940202 0 2.1 0H6.419C6.97577 0.000490146 7.50955 0.222061 7.903 0.616L8.19 0.903C8.42784 1.18073 8.41185 1.59474 8.15329 1.85329C7.89474 2.11185 7.48073 2.12784 7.203 1.89L6.916 1.603C6.7839 1.47197 6.60506 1.39892 6.419 1.4H2.1C1.7134 1.4 1.4 1.7134 1.4 2.1V11.9C1.4 12.2866 1.7134 12.6 2.1 12.6H14.7C15.0866 12.6 15.4 12.2866 15.4 11.9V4.9C15.4 4.5134 15.0866 4.2 14.7 4.2H3.5C3.1134 4.2 2.8 3.8866 2.8 3.5C2.8 3.1134 3.1134 2.8 3.5 2.8H14.7C15.8598 2.8 16.8 3.7402 16.8 4.9V11.9C16.8 12.457 16.5788 12.9911 16.1849 13.3849C15.7911 13.7788 15.257 14 14.7 14ZM9.1 7V6.3C9.1 5.9134 8.7866 5.6 8.4 5.6C8.0134 5.6 7.7 5.9134 7.7 6.3V7C7.7 7.3866 8.0134 7.7 8.4 7.7C8.7866 7.7 9.1 7.3866 9.1 7ZM9.1 10.5V9.8C9.1 9.4134 8.7866 9.1 8.4 9.1C8.0134 9.1 7.7 9.4134 7.7 9.8V10.5C7.7 10.8866 8.0134 11.2 8.4 11.2C8.7866 11.2 9.1 10.8866 9.1 10.5ZM7.7 8.4C7.7 8.0134 7.3866 7.7 7 7.7H6.3C5.9134 7.7 5.6 8.0134 5.6 8.4C5.6 8.7866 5.9134 9.1 6.3 9.1H7C7.3866 9.1 7.7 8.7866 7.7 8.4ZM11.2 8.4C11.2 8.0134 10.8866 7.7 10.5 7.7H9.8C9.4134 7.7 9.1 8.0134 9.1 8.4C9.1 8.7866 9.4134 9.1 9.8 9.1H10.5C10.8866 9.1 11.2 8.7866 11.2 8.4Z" />
                                </svg>
                                Bangla
                            </div>
                        </NavLink>
                    </nav>
                </div>
            );
        }
}


export default LeftMenu;
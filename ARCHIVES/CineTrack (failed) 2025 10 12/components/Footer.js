// ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ | FOOTER COMPONENT | ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ //
function Footer(isIndex) {
    // STATE VARIABLES
    const footerContainer = document.getElementById('footer');
    let homepageDirectory;
    let routeDirectory;
    // ADJUST CUSTOM DIRECTORIES
    isIndex ? homepageDirectory = '' : '..';
    isIndex ? routeDirectory = './pages' : '.';
    isIndex ? assetDirectory = '.' : '..';
    isIndex ? homepagePath = `${homepageDirectory}` : `${homepageDirectory}/index.html`;
    // FOOTER HTML CONTENT
    const footerHTML = `
        <!-- TOPSIDE OF FOOTER -->
        <section class="footerTop">
            <div class="footerTop_columns ftcol_1">
                <div class="footerTop_columns_logo monoton-regular">
                    CineTrack
                </div>
                <div class="footerTop_columns_sum">
                    CineTrack is your ultimate movie and TV series companion. Discover, track, and manage your favorite films and shows all in one place.
                </div>
                <div class="footerTop_columns_buttons">
                    <button class="btn btn-open">Privacy Policy</button>
                    <div class="modal" id="modal__privacy">
                        <button><i class="fa-solid fa-xmark"></i></button>
                        <article>
                            <h2>Privacy Policy</h2>
                            <h3>1. Introduction</h3>
                            <p>
                                At CineTrack, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you use our web application. By using CineTrack, you agree to the terms outlined in this policy.
                            </p>
                            <h3>2. Information We Collect</h3>
                            <p>
                                When you use CineTrack, we collect the following types of information:
                            </p>
                            <ul>
                                <li>
                                    Personal Information: This includes any information you provide directly, such as your name, email address, or profile details when you register or interact with our platform.
                                </li>
                                <li>
                                    Usage Data: We may collect information about how you use our services, including the movies and TV shows you browse, your favorites, and the lists you create (e.g., watched list, favorites).
                                </li>
                                <li>
                                    Cookies and Tracking Technologies: We use cookies, web beacons, and other tracking technologies to improve your experience, analyze trends, and provide personalized content. Cookies may also be used for authentication and session management.
                                </li>
                            </ul>
                            <h3>3. How We Use Your Information</h3>
                            <p>
                                We use your personal information for the following purposes:
                            </p>
                            <ul>
                                <li>
                                    To provide and maintain our services, including features like your watchlist, favorites, and movie recommendations.
                                </li>
                                <li>
                                    To personalize your experience on CineTrack.
                                </li>
                                <li>
                                    To communicate with you, including sending you account-related updates, promotional content, and notifications (if you’ve opted in).
                                </li>
                                <li>
                                    To analyze usage data and improve the performance of our web application.
                                </li>
                                <li>
                                    To comply with legal obligations or resolve disputes.
                                </li>
                            </ul>
                            <h3>4. Data Sharing and Disclosure</h3>
                            <p>
                                We do not sell, rent, or trade your personal information. However, we may share your information in the following situations:
                            </p>
                            <ul>
                                <li>
                                    With Service Providers: We may share your data with third-party companies that help us operate CineTrack, such as hosting providers or analytics services. These parties are contractually obligated to protect your information and use it solely for the purposes we specify.
                                </li>
                                <li>
                                    For Legal Compliance: We may disclose your information if required to do so by law or in response to legal requests, such as a subpoena or court order.
                                </li>
                                <li>
                                    Business Transfers: If CineTrack undergoes a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction.
                                </li>
                            </ul>
                            <h3>5. Data Retention</h3>
                            <p>
                                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. If you delete your account or request data deletion, we will remove your personal information from our active systems, but some residual data may remain in backups or logs.
                            </p>
                            <h3>6. Security of Your Information</h3>
                            <p>
                                We take reasonable measures to protect the security of your personal information, including encryption and secure storage. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
                            </p>
                            <h3>7. Your Rights and Choices</h3>
                            <p>
                                Depending on your location, you may have certain rights regarding your personal data, including:
                            </p>
                            <ul>
                                <li>
                                    Access and Correction: You can access or update your personal information at any time through your account settings.
                                </li>
                                <li>
                                    Data Deletion: You may request the deletion of your personal data by contacting us directly.
                                </li>
                                <li>
                                    Opt-Out of Marketing Communications: If you no longer wish to receive promotional emails or notifications, you can unsubscribe or update your preferences in your account settings.
                                </li>
                            </ul>
                            <h3>8. Third-Party Links</h3>
                            <p>
                                CineTrack may contain links to third-party websites, services, or content. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                            </p>
                            <h3>9. Children’s Privacy</h3>
                            <p>
                                CineTrack is not intended for use by individuals under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.
                            </p>
                            <h3>10. Changes to This Privacy Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We will notify you of any significant changes by updating the "Effective Date" at the top of this policy or by providing additional notices where appropriate.
                            </p>
                            <h3>11. Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <ul>
                                <li>Email: admin@cinetrack.com</li>
                                <li>Address: CineTrack, Inc. 1234 Film Avenue. Los Angeles, CA 90001. United States.</li>
                            </ul>
                        </article>
                    </div>
                    <button class="btn btn-open">Terms of Service</button>
                    <div class="modal" id="modal__terms">
                        <button><i class="fa-solid fa-xmark"></i></button>
                        <article>
                            <h2>Terms of Service</h2>
                            <p>Welcome to <strong>CineTrack</strong>! By using our web application, you agree to be bound by the following Terms of Service ("Terms"). If you do not agree with these Terms, you should not use our services.</p>
                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing or using the services provided by CineTrack, you agree to comply with and be bound by these Terms of Service. If you are using the app on behalf of an organization, you represent that you have the authority to bind the organization to these Terms.
                            </p>
                            <h3>2. Use of Services</h3>
                            <ul>
                                <li><strong>Account Creation:</strong> In order to use some features of CineTrack, you may need to create an account. You agree to provide accurate, current, and complete information when creating your account and to update it as necessary.</li>
                                <li><strong>Eligibility:</strong> You must be at least 13 years old to use CineTrack. If you are under the age of 13, you are not permitted to use the service.</li>
                                <li>
                                    <strong>Prohibited Activities:</strong> You agree not to:
                                    <ul>
                                        <li>Use the service for illegal activities.</li>
                                        <li>Violate any local, state, national, or international laws.</li>
                                        <li>Attempt to hack, disrupt, or interfere with CineTrack’s security or infrastructure.</li>
                                        <li>Reproduce, duplicate, copy, sell, or resell any part of the service without our express written permission.</li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>3. Privacy</h3>
                            <p>Your use of CineTrack is also governed by our <strong>Privacy Policy</strong>. Please review the Privacy Policy to understand how we collect, use, and protect your personal information.</p>
                            <h3>4. Intellectual Property</h3>
                            <ul>
                                <li><strong>Content Ownership:</strong> All content provided on CineTrack, including but not limited to text, images, logos, and movie data, is protected by copyright and other intellectual property laws. You may not use or distribute our content without permission.</li>
                                <li><strong>User-Generated Content:</strong> If you submit or upload any content to CineTrack (such as movie reviews, ratings, or other contributions), you grant us a worldwide, royalty-free license to use, display, and distribute this content in connection with the service.</li>
                            </ul>
                            <h3>5. Termination</h3>
                            <p>We may suspend or terminate your account at any time, without notice, for conduct that we believe violates these Terms of Service or for any other reason. You may terminate your account at any time by contacting us or through your account settings.</p>
                            <h3>6. Disclaimers and Limitation of Liability</h3>
                            <ul>
                                <li><strong>No Warranty:</strong> CineTrack provides the service "as is" and without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
                                <li><strong>Limitation of Liability:</strong> To the fullest extent permitted by applicable law, CineTrack will not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the service, even if we have been advised of the possibility of such damages.</li>
                            </ul>
                            <h3>7. Third-Party Links</h3>
                            <p>CineTrack may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of third-party websites. We recommend reviewing the terms and privacy policies of any third-party sites you visit.</p>
                            <h3>8. Children’s Privacy</h3>
                            <p>CineTrack is not intended for use by individuals under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
                            <h3>9. Changes to Terms</h3>
                            <p>We reserve the right to update or modify these Terms of Service at any time. When changes are made, we will post the updated Terms on this page with the new effective date. We encourage you to review these Terms regularly to stay informed about any updates.</p>
                            <h3>10. Governing Law</h3>
                            <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction where CineTrack operates. Any disputes arising from these Terms shall be resolved in the courts located in [Your City/State or Country].</p>
                            <h3>11. Contact Us</h3>
                            <p>If you have any questions about these Terms of Service, please contact us at:</p>
                            <ul>
                                <li><strong>Email:</strong> admin@cinetrack.com</li>
                                <li><strong>Address:</strong> 1234 Film Avenue. Los Angeles, CA 90001. United States.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
            <div class="footerTop_columns ftcol_2">
                <h3>movies</h3>
                <ul>
                    <li><a href="${routeDirectory}/collection.html">all movies</a></li>
                    <li><a href="${routeDirectory}/collection.html">popular movies</a></li>
                    <li><a href="${routeDirectory}/collection.html">popular movies</a></li>
                    <li><a href="${routeDirectory}/collection.html">top rated movies</a></li>
                    <li><a href="${routeDirectory}/collection.html">upcoming movies</a></li>
                </ul>
            </div>
            <div class="footerTop_columns ftcol_3">
                <h3>tv-series</h3>
                <ul>
                    <li><a href="${routeDirectory}/collection.html">all tv-series</a></li>
                    <li><a href="${routeDirectory}/collection.html">popular tv-series</a></li>
                    <li><a href="${routeDirectory}/collection.html">popular tv-series</a></li>
                    <li><a href="${routeDirectory}/collection.html">top rated tv-series</a></li>
                    <li><a href="${routeDirectory}/collection.html">upcoming tv-series</a></li>
                </ul>
            </div>
            <div class="footerTop_columns ftcol_4">
                <h3>contact us</h3>
                <ul>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        USA: +1 (123) 456-7890
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        CineTrack, Inc. 1234 Film Avenue. Los Angeles, CA 90001. United States.
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        AZE: +994 12 345-6789
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        CineTrack, Inc. 9 Lorem Street, Office 101. Baku, AZ 1000. Azerbaijan.
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        admin@cinetrack.com
                    </li>
                </ul>
                <div class="footerTop_columns_form">
                    <form>
                        <input type="email" placeholder="Email address">
                        <button class="btn">submit</button>
                    </form>
                </div>
            </div>
        </section>
        <!-- BOTTOM SIDE OF FOOTER -->
        <section class="footerBottom">
            <span>
                © 2025 CineTrack. All Rights Reserved.
            </span>
            <span>
                <a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://pinterest.com"><i class="fa-brands fa-pinterest"></i></a>
                <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://x.com"><i class="fa-brands fa-x"></i></a>
            </span>
        </section>
    `;
    footerContainer.innerHTML = footerHTML;
};
// ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ | FOOTER COMPONENT | ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ //

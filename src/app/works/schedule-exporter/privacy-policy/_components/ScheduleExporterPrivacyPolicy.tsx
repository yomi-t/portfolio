import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "../../../../../components/LinkButton";

export function ScheduleExporterPrivacyPolicy() {
    return (
        <section className="px-6 py-20 sm:px-14 sm:py-28">
            <div className="mx-auto max-w-2xl">
                <LinkButton href="/works/schedule-exporter" icon={ArrowLeft}>
                    Schedule Exporterに戻る
                </LinkButton>

                <h1 className="mt-10 font-mochiy text-2xl leading-snug sm:text-3xl">
                    Schedule Exporter Privacy Policy
                </h1>

                <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed opacity-70 sm:text-base">
                    <p>
                        This privacy policy applies to the Schedule Exporter app for
                        mobile devices, together with any related services operated by
                        TAIGA ITO (collectively, the &quot;Application&quot;). TAIGA ITO
                        is hereby referred to as the &quot;Service Provider&quot;.
                    </p>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Information Collection and Use
                        </h2>
                        <p className="mt-3">
                            The Application collects information when you download and
                            use it. This information may include information such as
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            <li>Your device&apos;s Internet Protocol address</li>
                            <li>
                                The pages of the Application that you visit, the time and
                                date of your visit, the time spent on those pages
                            </li>
                            <li>The time spent on the Application</li>
                            <li>your mobile operating system you use</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Google Workspace APIs and User Data
                        </h2>
                        <p className="mt-3">
                            Our Application uses the Google Calendar API to provide its
                            core features. We are committed to protecting your Google
                            user data and comply with the following principles:
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                            <li>
                                <strong className="opacity-100">
                                    Access and Collection:
                                </strong>{" "}
                                The Application accesses your Google Calendar data with
                                strict read-only permissions. We only read your calendar
                                events to identify your available time (free schedules).
                                The Application does not have permission to write,
                                modify, or delete your calendar events.
                            </li>
                            <li>
                                <strong className="opacity-100">Use of Data:</strong> The
                                data obtained through the Google Calendar API is used
                                strictly to extract and display your available schedules
                                within the Application. We do not use your Google user
                                data for serving advertisements or any other unrelated
                                purposes.
                            </li>
                            <li>
                                <strong className="opacity-100">
                                    Storage and Sharing:
                                </strong>{" "}
                                Your Google Calendar data is processed locally on your
                                device and is never stored on our external servers. We do
                                not share your Google user data with any third parties.
                            </li>
                            <li>
                                <strong className="opacity-100">
                                    Limited Use Compliance:
                                </strong>{" "}
                                The Application&apos;s use and transfer to any other app
                                of information received from Google APIs will adhere to
                                the{" "}
                                <Link
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-600 underline decoration-sky-600/40 underline-offset-2 hover:text-sky-700"
                                >
                                    Google API Services User Data Policy
                                </Link>
                                , including the Limited Use requirements.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Cookies and tracking technologies
                        </h2>
                        <p className="mt-3">
                            The Application or its third-party SDKs may use cookies,
                            SDKs, pixels, and similar technologies to support
                            functionality, analytics, or service delivery. Where required
                            by applicable law, the Service Provider will obtain consent
                            before using non-essential tracking technologies.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Your Rights
                        </h2>
                        <p className="mt-3">
                            You may request access to, correction of, or deletion of
                            your personal data held by the Service Provider. To exercise
                            these rights, or to withdraw consent where processing is
                            based on consent, contact the Service Provider at
                            contact@yomi-t.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Your California privacy rights (CCPA/CPRA)
                        </h2>
                        <p className="mt-3">
                            If you are a California resident, you have the right to know
                            what personal information is collected, the right to delete
                            personal information, the right to opt out of the sale or
                            sharing of personal information, and the right to
                            non-discrimination for exercising these rights. To exercise
                            your CCPA/CPRA rights, contact the Service Provider at
                            contact@yomi-t.com.
                        </p>
                        <p className="mt-3">
                            The Service Provider may use the information you provide to
                            send important information, required notices, and, where
                            permitted by law, marketing communications.
                        </p>
                    </div>

                    <p>
                        For a better experience while using the Application, the
                        Service Provider may require you to provide certain personally
                        identifiable information. The information the Service Provider
                        requests will be retained and used as described in this privacy
                        policy.
                    </p>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Third Party Access
                        </h2>
                        <p className="mt-3">
                            Only aggregated, anonymized data is periodically
                            transmitted to external services to aid the Service Provider
                            in improving the Application and their service. The Service
                            Provider may share your information with third parties in
                            the ways that are described in this privacy statement.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            International Data Transfers
                        </h2>
                        <p className="mt-3">
                            The Service Provider or its third-party service providers
                            may transfer personal data to countries outside your country
                            of residence, including outside the European Economic Area
                            (EEA). Where applicable law requires safeguards for
                            international transfers, the Service Provider will use
                            appropriate mechanisms.
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            <li>
                                Standard Contractual Clauses (SCCs) approved by the
                                European Commission
                            </li>
                            <li>
                                Adequacy decisions or other legally recognized transfer
                                mechanisms
                            </li>
                            <li>Your consent, where required and legally permitted</li>
                        </ul>
                        <p className="mt-3">
                            Data protection laws in other countries may differ from
                            those in your jurisdiction. Where required by law, the
                            Service Provider will apply appropriate safeguards and
                            obtain any consent required for the transfer.
                        </p>
                    </div>

                    <div>
                        <p>
                            The Service Provider may disclose User Provided and
                            Automatically Collected Information:
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            <li>
                                as required by law, such as to comply with a subpoena,
                                or similar legal process;
                            </li>
                            <li>
                                when they believe in good faith that disclosure is
                                necessary to protect their rights, protect your safety or
                                the safety of others, investigate fraud, or respond to a
                                government request;
                            </li>
                            <li>
                                with their trusted services providers who work on their
                                behalf, do not have an independent use of the
                                information the Service Provider discloses to them, and
                                have agreed to adhere to the rules set forth in this
                                privacy statement.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Opt-Out Rights
                        </h2>
                        <p className="mt-3">
                            You can stop further collection of information from your
                            mobile device by uninstalling the Application. Uninstalling
                            will stop the Application from collecting data from your
                            device, but it does not automatically delete information
                            that has already been transmitted to the Service Provider or
                            to third parties.
                        </p>
                        <p className="mt-3">
                            To request deletion of your personal data, to withdraw
                            consent, or to exercise any of your rights, contact the
                            Service Provider at contact@yomi-t.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Data Retention Policy
                        </h2>
                        <p className="mt-3">
                            The Service Provider retains personal data based on its
                            necessity for the stated purposes:
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5">
                            <li>
                                User Provided Data: Retained for the duration of your
                                use of the Application plus 12 months thereafter, unless
                                longer retention is required by law
                            </li>
                            <li>
                                Automatically Collected Data: Retained for up to 24
                                months from collection, unless longer retention is
                                required for legal compliance
                            </li>
                            <li>
                                Aggregated and Anonymized Data: Retained indefinitely as
                                it no longer identifies you
                            </li>
                            <li>
                                Data required for legal compliance: Retained as long as
                                required by applicable law
                            </li>
                        </ul>
                        <p className="mt-3">
                            You may request deletion of your personal data, subject to
                            any legal obligation to retain it. If you want the Service
                            Provider to delete User Provided Data submitted through the
                            Application, please contact them at contact@yomi-t.com.
                            Please note that some User Provided Data may be required
                            for the Application to function properly.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Children
                        </h2>
                        <p className="mt-3">
                            The Application is not intended for children under 16 years
                            of age, or such higher age as required by applicable law.
                            The Service Provider does not knowingly solicit data from
                            children or market the Application to them.
                        </p>
                        <p className="mt-3">
                            The Service Provider does not knowingly collect personally
                            identifiable information from children. The Service
                            Provider encourages all children to never submit any
                            personally identifiable information through the Application
                            and/or Services. The Service Provider encourages parents and
                            legal guardians to monitor their children&apos;s Internet
                            usage and to help enforce this Policy by instructing their
                            children never to provide personally identifiable
                            information through the Application and/or Services without
                            their permission. If you have reason to believe that a child
                            has provided personally identifiable information to the
                            Service Provider through the Application and/or Services,
                            please contact the Service Provider (contact@yomi-t.com) so
                            that they will be able to take the necessary actions. If you
                            are under 16 years of age, your parent or guardian must
                            provide consent on your behalf where permitted by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Security
                        </h2>
                        <p className="mt-3">
                            The Service Provider is concerned about safeguarding the
                            confidentiality of your information. The Service Provider
                            provides physical, electronic, and procedural safeguards to
                            protect information the Service Provider processes and
                            maintains.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Data Breach Notification
                        </h2>
                        <p className="mt-3">
                            If a data breach occurs that affects your personal data,
                            the Service Provider will notify you in accordance with
                            applicable legal requirements, including, where required,
                            providing information about the nature of the breach and the
                            steps being taken to address it.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Changes
                        </h2>
                        <p className="mt-3">
                            The Service Provider may update this Privacy Policy from
                            time to time. The Service Provider will notify you of
                            material changes by posting the updated Privacy Policy with
                            an effective date. Where required by law, the Service
                            Provider will seek your consent to material changes before
                            they take effect.
                        </p>
                        <p className="mt-3">
                            Previous versions of this Privacy Policy will be maintained
                            and made available upon request by contacting the Service
                            Provider at contact@yomi-t.com.
                        </p>
                    </div>

                    <p>This privacy policy is effective as of 2026-06-19</p>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Your Consent
                        </h2>
                        <p className="mt-3">
                            Where processing is based on consent, you provide that
                            consent by affirmatively opting in to the relevant feature
                            or action. You may withdraw consent at any time without
                            affecting processing carried out before withdrawal.
                            Processing based on other lawful bases is carried out as
                            described above.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-mochiy text-lg opacity-100 sm:text-xl">
                            Contact Us
                        </h2>
                        <p className="mt-3">
                            If you have any questions regarding privacy while using the
                            Application, or have questions about the practices, please
                            contact the Service Provider via email at
                            contact@yomi-t.com.
                        </p>
                    </div>

                    <p className="text-xs opacity-60">
                        This privacy policy page was generated by{" "}
                        <Link
                            href="https://app-privacy-policy-generator.nisrulz.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 underline decoration-sky-600/40 underline-offset-2 hover:text-sky-700"
                        >
                            App Privacy Policy Generator
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}

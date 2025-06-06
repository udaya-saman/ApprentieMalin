'use client';

import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			<AnimatedSection className='container mx-auto px-4 py-6'>
				<div className='max-w-4xl mx-auto'>
					<motion.h1
						className='text-3xl md:text-4xl font-bold text-blue-600 mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						Privacy Policy
					</motion.h1>

					<div className='prose prose-lg max-w-none'>
						<AnimatedCard delay={0.2}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.4 }}>
								<p>Last updated: January 1, 2023</p>

								<h2>1. Introduction</h2>
								<p>
									ApprentieMalin (&quot;we,&quot; &quot;our,&quot; or
									&quot;us&quot;) is committed to protecting your privacy. This
									Privacy Policy explains how we collect, use, disclose, and
									safeguard your information when you use our website, mobile
									application, and services (collectively, the
									&quot;Service&quot;).
								</p>
								<p>
									Please read this Privacy Policy carefully. If you do not agree
									with the terms of this Privacy Policy, please do not access
									the Service.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.3}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}>
								<h2>2. Information We Collect</h2>
								<p>We may collect information about you in various ways:</p>

								<h3>2.1 Personal Information</h3>
								<p>
									When you create an account or use our Service, we may collect
									personal information such as:
								</p>
								<ul>
									<li>Name</li>
									<li>Email address</li>
									<li>Phone number</li>
									<li>Child&apos;s first name and grade level</li>
									<li>Payment information</li>
								</ul>

								<h3>2.2 Usage Information</h3>
								<p>
									We may also collect information about how you use our Service,
									including:
								</p>
								<ul>
									<li>Interactions with our AI tools</li>
									<li>
										Content of your questions and conversations with our
										callbots
									</li>
									<li>
										Log data (such as IP address, browser type, pages visited)
									</li>
									<li>
										Device information (such as device ID, model, operating
										system)
									</li>
								</ul>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.4}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.6 }}>
								<h2>3. How We Use Your Information</h2>
								<p>
									We may use the information we collect for various purposes,
									including to:
								</p>
								<ul>
									<li>Provide, maintain, and improve our Service</li>
									<li>Personalize learning experiences for students</li>
									<li>Process payments and manage your account</li>
									<li>
										Send you updates and communication related to the Service
									</li>
									<li>Monitor and analyze trends, usage, and activities</li>
									<li>
										Detect, prevent, and address technical issues or fraudulent
										activities
									</li>
									<li>Improve our AI systems and educational content</li>
								</ul>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.5}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.7 }}>
								<h2>4. Sharing Your Information</h2>
								<p>
									We may share your information in the following situations:
								</p>
								<ul>
									<li>
										With service providers who perform services on our behalf
									</li>
									<li>To comply with legal obligations</li>
									<li>To protect and defend our rights and property</li>
									<li>With your consent or at your direction</li>
								</ul>
								<p>
									We do not sell, rent, or trade your personal information to
									third parties for their marketing purposes.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.6}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.8 }}>
								<h2>5. Data Security</h2>
								<p>
									We use administrative, technical, and physical security
									measures to help protect your personal information from
									unauthorized access and disclosure. However, no system is
									completely secure, and we cannot guarantee the absolute
									security of your information.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.7}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.9 }}>
								<h2>6. Children&apos;s Privacy</h2>
								<p>
									Our Service is intended for use by children under parental
									supervision. We collect limited information about children, as
									described in this Privacy Policy, and we comply with
									applicable laws regarding the protection of children&apos;s
									privacy, including the Children&apos;s Online Privacy
									Protection Act (COPPA).
								</p>
								<p>
									Parents or guardians have the right to review, delete, and
									control the use of personal information provided by their
									children. To exercise these rights, please contact us at
									privacy@apprentiemalin.com.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.8}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1 }}>
								<h2>7. Your Rights</h2>
								<p>
									Depending on your location, you may have certain rights
									regarding your personal information, such as the right to:
								</p>
								<ul>
									<li>
										Access and receive a copy of your personal information
									</li>
									<li>Rectify inaccurate or incomplete information</li>
									<li>Request deletion of your personal information</li>
									<li>Restrict or object to processing of your information</li>
									<li>Data portability</li>
								</ul>
								<p>
									To exercise these rights, please contact us at
									privacy@apprentiemalin.com.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.9}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.1 }}>
								<h2>8. Changes to This Privacy Policy</h2>
								<p>
									We may update this Privacy Policy from time to time. We will
									notify you of any changes by posting the new Privacy Policy on
									this page and updating the &quot;Last updated&quot; date. You
									are advised to review this Privacy Policy periodically for any
									changes.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={1}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}>
								<h2>9. Contact Us</h2>
								<p>
									If you have any questions about this Privacy Policy, please
									contact us at privacy@apprentiemalin.com.
								</p>
							</motion.div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}

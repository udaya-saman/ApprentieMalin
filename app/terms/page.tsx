'use client';

import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function TermsPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			<AnimatedSection className='container mx-auto px-4 py-6'>
				<div className='max-w-4xl mx-auto'>
					<motion.h1
						className='text-3xl md:text-4xl font-bold text-blue-600 mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						Terms of Service
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
									Welcome to ApprentieMalin ("we," "our," or "us"). These Terms
									of Service ("Terms") govern your access to and use of the
									ApprentieMalin website, mobile application, and services
									(collectively, the "Service"). By accessing or using the
									Service, you agree to be bound by these Terms. If you do not
									agree to these Terms, you may not access or use the Service.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.3}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}>
								<h2>2. Use of the Service</h2>
								<p>
									You may use our Service only as permitted by these Terms and
									any applicable laws. You may not use our Service:
								</p>
								<ul>
									<li>
										In any way that violates any applicable law or regulation
									</li>
									<li>
										To transmit any material that is defamatory, offensive, or
										otherwise objectionable
									</li>
									<li>
										To attempt to interfere with the proper working of the
										Service
									</li>
									<li>
										To impersonate or attempt to impersonate ApprentieMalin, an
										ApprentieMalin employee, or another user
									</li>
								</ul>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.4}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.6 }}>
								<h2>3. Accounts</h2>
								<p>
									When you create an account with us, you must provide
									information that is accurate, complete, and current at all
									times. Failure to do so constitutes a breach of the Terms,
									which may result in immediate termination of your account.
								</p>
								<p>
									You are responsible for safeguarding the password that you use
									to access the Service and for any activities or actions under
									your password.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.5}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.7 }}>
								<h2>4. Subscriptions and Payments</h2>
								<p>
									Some aspects of the Service may be provided for a fee. You
									will be required to select a payment plan and provide accurate
									billing information. By submitting such information, you grant
									us the right to provide the information to third parties for
									purposes of facilitating payment.
								</p>
								<p>
									The subscription fee will be billed at the beginning of your
									subscription and each month or year thereafter unless you
									cancel. We do not provide refunds for partial subscription
									periods.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.6}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.8 }}>
								<h2>5. Free Trial</h2>
								<p>
									We may, at our sole discretion, offer a subscription with a
									free trial for a limited period of time. You may be required
									to enter your billing information to sign up for the free
									trial. If you do not cancel before the end of the free trial
									period, you will be automatically charged for the
									subscription.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.7}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.9 }}>
								<h2>6. Intellectual Property</h2>
								<p>
									The Service and its original content, features, and
									functionality are and will remain the exclusive property of
									ApprentieMalin and its licensors. The Service is protected by
									copyright, trademark, and other laws.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.8}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1 }}>
								<h2>7. Privacy</h2>
								<p>
									Our Privacy Policy, which is incorporated into these Terms by
									reference, describes our policies and procedures on the
									collection, use, and disclosure of your personal information
									when you use the Service.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={0.9}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.1 }}>
								<h2>8. Limitation of Liability</h2>
								<p>
									In no event shall ApprentieMalin, its directors, employees,
									partners, agents, suppliers, or affiliates, be liable for any
									indirect, incidental, special, consequential, or punitive
									damages, including without limitation, loss of profits, data,
									use, goodwill, or other intangible losses, resulting from (i)
									your access to or use of or inability to access or use the
									Service; (ii) any conduct or content of any third party on the
									Service; (iii) any content obtained from the Service; and (iv)
									unauthorized access, use, or alteration of your transmissions
									or content.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={1}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}>
								<h2>9. Changes to Terms</h2>
								<p>
									We reserve the right, at our sole discretion, to modify or
									replace these Terms at any time. If a revision is material, we
									will try to provide at least 30 days' notice prior to any new
									terms taking effect. What constitutes a material change will
									be determined at our sole discretion.
								</p>
							</motion.div>
						</AnimatedCard>

						<AnimatedCard delay={1.1}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.3 }}>
								<h2>10. Contact Us</h2>
								<p>
									If you have any questions about these Terms, please contact us
									at support@apprentiemalin.com.
								</p>
							</motion.div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}

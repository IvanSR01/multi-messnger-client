"use client";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/DashboardLayout";
import styles from "./Contact.module.scss";
import { User } from "@/components/dashboard-components/user/User";
import { MultiButton } from "@/shared/ui/multi-button/MultiButton";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
export function Contact() {
  return (
    <DashboardLayout>
      <div className={styles.contact}>
				<div className={styles.heading}>
					Contact
				</div>
				<MultiButton className={styles.contactButton}
			>
					<div className={styles.mainInfo}>
						<ReactIcon name="FaRegUserCircle" />
						<p>To invite</p>
					</div>
				</MultiButton>
        <div className={styles.items}>
          {[...Array(10)].map((item, index) => (
            <>
              <div className={styles.itemsHeading}>J</div>
              <User className={styles.border} />
              <User />
            </>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

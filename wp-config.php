<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+Wfe;>(88|]^*tLamk..Vk)nQ@uq.XnD,tj4/w=Z8d|RRX];At 84K!Dkh365I1E' );
define( 'SECURE_AUTH_KEY',  'RPmyV}w>nwy_AD[0F:7T@8iU%w@@Sg<qu^;RM.GYZu4(^Nlkm}T,.DEHjx|]s8:_' );
define( 'LOGGED_IN_KEY',    '.ce5WbIm2)Yp)9OqCEBVSSyL{NkGCB,$J1|*//8WmDek8d3tFUY}#H,*P5U6@31r' );
define( 'NONCE_KEY',        ']laf}hVF4!|<q^ g!^9?r7tqwu#ZXY{+FmnE).b>1[:Sg?1_U2wRJq$Eei~3RwRV' );
define( 'AUTH_SALT',        '8S}GYp<dZ^8kno5.^ HsQXy6&*#!q{?vyixH1M0h&8jj)FIw0bi-[:RHSrSKag&T' );
define( 'SECURE_AUTH_SALT', 'no7rEY&?;t+U2HAcuIXKG4Si!2,{F|K2r_7I {){=(D7X3+##NDpw~S,ENO4mgL5' );
define( 'LOGGED_IN_SALT',   'Mbi.MV~%a!h?`xqK(zE?z#K!=QSqse+~@i>F&J~sHm_w{qiSE+u^1 kR:;L0r,|v' );
define( 'NONCE_SALT',       '<Jro@:LkLB+*(xu&*aYR*W*+wu(U`r>_FU+Z9UM!*xyo.^yZo/FZg>n>6oB=eKD$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
